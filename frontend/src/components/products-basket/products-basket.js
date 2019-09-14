import React, { Component } from 'react';

class ProductsBasket extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <button
                className={`btn btn-primary`}
                style={{
                    background: "#FDC513",
                    color: "black",
                    borderColor: "#FDC513",
                    marginLeft: 100,
                    marginTop: 40,
                }}
                onClick={this.props.onCheckout}
            >
                Checkout
            </button>
        </div>;
    }

}

export default ProductsBasket;
