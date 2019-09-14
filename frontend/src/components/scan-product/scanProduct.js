import React, { Component } from "react"
import "./scanProduct.css"
import Scanner from "./scanner"

class ScanProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scanning: false,
      results: [],
      scannedProducts: 0,
    };
    this._scan = this._scan.bind(this);
    this._onDetected = this._onDetected.bind(this);
  }

  componentDidMount() {
      this.props.productsService.productIsValid$.subscribe(productIsValid => {
          if (productIsValid === true) {
              this.props.productsService.addProductCounter(
                  this.props.scannedProducts + 1
              );
              this.props.navigateToDetails();
          }
      })
  }

    onBarcodeReceived = (barcode) => {
    this.props.productsService.getProductBasedOnBarcode(barcode);
  };

  _scan() {
    this.setState({ scanning: !this.state.scanning });
  }

  _onDetected(result) {
    this.setState({ results: this.state.results.concat([result]) });
  }

  render() {
    return (
      <div className="scan-product-container"
           style={{maxWidth: 960,  margin: `0 auto`}}>
        <h1>Scan your code please!</h1>
        <button
          className={`btn btn-primary`}
          style={{
            background: "#FDC513",
            color: "black",
            borderColor: "#FDC513",
          }}
          onClick={this._scan}
        >
          {this.state.scanning ? "Stop" : "Start"}
        </button>

        {this.state.scanning ? (
          <Scanner onDetected={this.onBarcodeReceived} />
        ) : null}
      </div>
    )
  }
}

export default ScanProduct
