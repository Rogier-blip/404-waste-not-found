import React, {Component} from 'react';

class ProductsBasket extends Component{

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
            >
                Checkout
            </button>
        </div>;
    }

}

export default ProductsBasket;
