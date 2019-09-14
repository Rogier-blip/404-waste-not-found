import React, {Component} from 'react';
import Layout from  '../components/layout';
import SEO from '../components/seo';
import ScanProduct from '../components/scan-product/scanProduct';
import { Link } from 'gatsby';
import ProductsService from '../services/products.service';
import ProductDetails from '../components/product-details/product-details';


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

    render() {
        if (this.state.scannerOpened) {
            return <Layout>
                <SEO title="Home"/>
                <ScanProduct productsService={this.productsService}
                             navigateToDetails={this.navigateToDetails}/>
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
                <SEO title="Home"/>
                <ProductDetails productsService={this.productsService}/>
                <Link
                    className={`btn btn-primary`}
                    style={{background: '#FDC513', color: 'black', borderColor: '#FDC513'}}
                    to='/details-page/'
                >
                    Product Details
                </Link>
            </Layout>
        }
    }
}

export default IndexPage;

