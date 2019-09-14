import React, {Component} from 'react';
import Layout from  '../components/layout';
import ScanProduct from '../components/scan-product/scanProduct';
import ProductsService from '../services/products.service';
import ProductDetails from '../components/product-details/product-details';
import ProductsBasket from '../components/products-basket/products-basket';


class IndexPage extends Component {

  productsService = ProductsService.getInstance();

  constructor() {
    super();
    this.state = {
      scannerOpened: true,
      scannedProducts: 0,
    };
  }

  navigateToDetails = () => {
    this.setState({ scannerOpened: false });
  };

  navigateToScanner = () => {
    this.setState({ scannerOpened: true });
  };

    componentDidMount() {
        this.productsService.productsCounter$.subscribe(counter => {
            if (counter) {
                this.setState({scannedProducts: counter});
            }
        })
    }

    render() {
        if (this.state.scannerOpened) {
            return <Layout title={'Scan Product'}>
                <div className={'row'}>
                    <div className={'col-8 offset-2'}>
                        <ScanProduct productsService={this.productsService}
                                     navigateToDetails={this.navigateToDetails}
                                     scannedProducts={this.state.scannedProducts}/>
                    </div>
                    <div className={'col-2'}>
                        <h2 style={{textAlign: "right"}}> total amount: {this.state.scannedProducts}</h2>
                        <ProductsBasket />
                    </div>
                </div>
                <button
                    className={`btn btn-primary`}
                    style={{background: '#FDC513', color: 'black', borderColor: '#FDC513'}}
                    onClick={() => this.setState({scannerOpened: false})}
                >
                    DetailsPage
                </button>
            </Layout>
        } else {
            return <Layout title={'Product Details'}>
                <div className={'row'}>
                    <div className={'col-8 offset-2'}>
                        <ProductDetails productsService={this.productsService}
                                        navigateToScanner={this.navigateToScanner}/>
                    </div>
                    <div className={'col-2'}>
                        <h2 style={{textAlign: "right"}}> total amount: {this.state.scannedProducts}</h2>
                        <ProductsBasket />
                    </div>
                </div>
            </Layout>
        }
    }
}

export default IndexPage;
