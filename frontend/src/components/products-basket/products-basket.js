import React, {Component} from 'react';

class ProductsBasket extends Component{

    productDetails = [];

    constructor(props) {
        super(props);
        this.state = {
            scannedProducts: []
        }
    }

    componentDidMount() {
        this.props.productsService.scannedProducts$.subscribe( products => {
            this.setState({ scannedProducts: products});
        })
    }

    componentWillUnmount() {
        this.props.productsService.scannedProducts$.unsubscribe();
    }

    render() {
        return <div>
            <ul>
                {this.state.scannedProducts.map((value, index) => {
                    return <li style={{listStyleType: 'none'}} key={index}>{value.name}</li>
                })}
            </ul>
            <button
                className={`btn btn-primary`}
                style={{
                    background: "#FDC513",
                    color: "black",
                    borderColor: "#FDC513",
                    marginLeft: 100,
                    marginTop: 40,
                }}
            >
                Checkout
            </button>
        </div>;
    }

}

export default ProductsBasket;
