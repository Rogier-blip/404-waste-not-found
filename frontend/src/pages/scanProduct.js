import React, { Component } from "react"
import "../components/scan-product/scanProduct.css"
import Scanner from "../components/scan-product/scanner"
import Layout from "../components/layout"
import axios from "axios"

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
    console.log('ok');
    console.log(barcode);
    const product = {
      type: null,
      groenies: null,
      description: null,
      img: null,
      barcode: null
    };

    axios.get("/product/details/",
      barcode.codeResult.code
    ).then(result => {
      console.log(result);
    })
      .catch(error => {
        console.log(error);
      });
    this.setState({
      scanning: !this.state.scanning,
      results: this.state.results.push(product)
    })
  }

  _scan() {
    this.setState({ scanning: !this.state.scanning })
  }
  _onDetected(result) {
    this.setState({ results: this.state.results.concat([result]) })
  }
  render() {
    return (
      <Layout>
        <div className="scan-product-container">
          <h1>Scan your code please!</h1>
          <button onClick={this._scan}>
            {this.state.scanning ? "Stop" : "Start"}
          </button>

          {this.state.scanning ? (
            <Scanner onDetected={this.onBarcodeReceived} />
          ) : null}
        </div>
      </Layout>
    )
  }
}
export default ScanProductComponent