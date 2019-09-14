import React, { Component } from 'react';
import Layout from '../components/layout';
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
    this.productsService.getBarcodes()
  }

  navigateToDetails = () => {
    this.setState({ scannerOpened: false })
  };

  navigateToScanner = () => {
    this.productsService.productIsValid$.next(false);
    this.setState({ scannerOpened: true });
  };

  componentDidMount() {
    this.productsService.scannedProducts$.subscribe(products => {
      if (products) {
        this.setState({ scannedProducts: products.length });
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
              scannedProducts={this.state.scannedProducts} />
          </div>
          <div className={'col-2'}>
            <h2 style={{ textAlign: "right" }}> total amount: {this.state.scannedProducts}</h2>
            <ProductsBasket productsService={this.productsService}/>
          </div>
        </div>
      </Layout>
    } else {
      return <Layout title={'Product Details'}>
        <div className={'row'}>
          <div className={'col-8 offset-2'}>
            <ProductDetails productsService={this.productsService}
              navigateToScanner={this.navigateToScanner} />
          </div>
          <div className={'col-2'}>
            <h2 style={{ textAlign: "right" }}> total amount: {this.state.scannedProducts}</h2>
            <ProductsBasket productsService={this.productsService}/>
          </div>
        </div>
      </Layout>
    }
  }
}

export default IndexPage
