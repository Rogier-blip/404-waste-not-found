import React from "react"

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scannedProducts: 0,
            product: {},
        }
    }

    componentDidMount() {
        this.props.productsService.scannedProducts$.subscribe( products => {
            this.setState({ product: products[products.length - 1]});
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.product.name}</h2>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <p>
                            Groenies: <b>{this.state.product.groenies}</b>
                        </p>
                    </div>
                    <div className={"col-6"}>
                        <p>Description: </p>
                    </div>
                    <div className={"col-6"}>
                        <img
                            src={this.state.product.img}
                            alt={"product"}
                        />
                    </div>
                    <div className={"col-6"}>
                        <textarea
                            style={{minHeight: 300}}
                            disabled={true}
                            value={this.state.product.description}
                        />
                    </div>
                </div>
                <button
                    className={`btn btn-primary`}
                    style={{
                        background: "#FDC513",
                        color: "black",
                        borderColor: "#FDC513",
                        marginTop: 40,
                    }}
                    onClick={this.props.navigateToScanner}>
                    Scan another product
                </button>
            </div>
        )
    }
}

export default ProductDetails
