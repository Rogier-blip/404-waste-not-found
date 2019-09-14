import React, { Component } from 'react';
import Layout from '../components/layout';
import ScanProduct from '../components/scan-product/scanProduct';
import ProductsService from '../services/products.service';
import ProductDetails from '../components/product-details/product-details';
import ProductsBasket from '../components/products-basket/products-basket';
import CheckoutComponent from '../components/checkout/checkout';


class IndexPage extends Component {
  productsService = ProductsService.getInstance();

  constructor() {
    super();
    this.state = {
      scannerOpened: true,
      scannedProducts: 0,
      detailsOpened: false,
      checkoutOpened: false,
    }
    this.productsService.getBarcodes()
  }

  navigateToDetails = () => {
    this.setState({ scannerOpened: false })
  };

  navigateToScanner = () => {
    this.productsService.productIsValid$.next(false);
    this.setState({
      scannerOpened: true,
      detailsOpened: false,
      checkoutOpened: false
    });
  };

  navigateToCheckout = () => {
    console.log('ok')
    this.setState({
      scannerOpened: false,
      detailsOpened: false,
      checkoutOpened: true,
    })
  }

  navigateToDetails = () => {
    this.setState({
      scannerOpened: false,
      detailsOpened: true,
      checkoutOpened: false,
    })
  }

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
            <ProductsBasket onCheckout={this.navigateToCheckout} productsService={this.productsService} />
          </div>
        </div>

      </Layout>
    } else if (this.state.detailsOpened) {
      return <Layout title={'Product Details'}>
        <div className={'row'}>
          <div className={'col-8 offset-2'}>
            <ProductDetails productsService={this.productsService}
              navigateToScanner={this.navigateToScanner}
              navigateToDetails={this.navigateToDetails} />
          </div>
          <div className={'col-2'}>
            <h2 style={{ textAlign: "right" }}> total amount: {this.state.scannedProducts}</h2>
            <ProductsBasket onCheckout={this.navigateToCheckout} productsService={this.productsService} />
          </div>
        </div>
      </Layout>
    }
    else if (this.state.checkoutOpened) {
      return <Layout title={'Product Details'}>
        <CheckoutComponent productsService={this.productsService}></CheckoutComponent>
      </Layout>
    }
  }
}

export default IndexPage

