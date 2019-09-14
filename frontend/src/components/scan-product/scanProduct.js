import React, { Component } from "react"
import "./scanProduct.css"
import Scanner from "./scanner"

class ScanProductComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      scanning: false,
      results: [],

    }
    this._scan = this._scan.bind(this)
    this._onDetected = this._onDetected.bind(this)
  }

  onBarcodeReceived = (barcode) => {
    this.props.productsService.getProductBasedOnBarcode(barcode);
  }

  _scan() {
    this.setState({ scanning: !this.state.scanning })
  }
  _onDetected(result) {
    this.setState({ results: this.state.results.concat([result]) })
  }
  render() {
    return (
      // <Layout>
      <div className="scan-product-container">
        <h1>Scan your code please!</h1>
        <button onClick={this._scan}>
          {this.state.scanning ? "Stop" : "Start"}
        </button>

        {this.state.scanning ? (
          <Scanner onDetected={this.onBarcodeReceived} />
        ) : null}
      </div>
      // </Layout>
    )
  }
}
export default ScanProductComponent