import React from "react"

//TODO: Actually connect with backend data before rendering this component.
const mockedProduct = {
  _id: "5d7bcaca538da68f9d3ba3d9",
  name: "demo Product",
  groenies: "10",
  dercription: "random description",
  img: "gatsby-astronaut.png",
  barcode: "12356",
};

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scannedProducts: 0,
    }
  }

  componentDidMount() {
    this.props.productsService.productsCounter$.subscribe(counter => {
      if (counter) {
        this.setState({ scannedProducts: counter });
      }
    })
  }

  render() {
    return (
      <div style={{maxWidth: 960,  margin: `0 auto`}}>
          <button
              className={`btn btn-primary`}
              style={{
                  background: "#FDC513",
                  color: "black",
                  borderColor: "#FDC513",
                  marginLeft: 400,
                  marginTop: 40,
              }}
              onClick={this.props.navigateToScanner}
          >
              Scan another product
          </button>
          <h2 style={{ textAlign: "right" }}> total amount: {this.state.scannedProducts}</h2>
        <h2>Product: {mockedProduct.name}</h2>
        <div className={"row"}>
          <div className={"col-6"}>
            <p>
              Groenies: <b>{mockedProduct.groenies}</b>
            </p>
            <p>Description: </p>
            <textarea
              style={{ minHeight: 200 }}
              disabled={true}
              defaultValue={mockedProduct.dercription}
            />
          </div>
          <div className={"col-6"}>
            <img
              src={require(`../../images/` + mockedProduct.img)}
              alt={"product"}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetails
