import React, {Component} from 'react';
import Layout from  '../components/layout';
import SEO from '../components/seo';
import ScanProduct from '../components/scan-product/scanProduct';
import ProductsService from '../services/products.service';
import ProductDetails from '../components/product-details/product-details';
import ProductsBasket from '../components/products-basket/products-basket';


class IndexPage extends Component{

    productsService = ProductsService.getInstance();

    constructor() {
        super();
        this.state = {
            scannerOpened: true,
            scannedProducts: 0,
        };
    }

    navigateToDetails = () => {
        this.setState({ scannerOpened: false});
    };

    navigateToScanner = () => {
        this.setState({ scannerOpened: true});
    };

    render() {
        if (this.state.scannerOpened) {
            return <Layout>
                <div className={'row'}>
                    <div className={'col-6 offset-2'}>
                        <ScanProduct productsService={this.productsService}
                                     navigateToDetails={this.navigateToDetails}/>
                    </div>
                    <div className={'col-4'}>
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
            return <Layout>
                <div className={'row'}>
                    <div className={'col-6 offset-2'}>
                        <ProductDetails productsService={this.productsService}
                                        navigateToScanner={this.navigateToScanner}/>
                    </div>
                    <div className={'col-4'}>
                        <ProductsBasket />
                    </div>
                </div>
            </Layout>
        }
    }
}

export default IndexPage;

