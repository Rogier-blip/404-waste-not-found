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
    this.props.productsService.productsCounter$.subscribe(counter => {
      if (counter) {
        this.setState({ scannedProducts: counter })
      }
    })
  }

  _scan() {
    this.props.productsService.addProductCounter(
      this.state.scannedProducts + 1
    );
    this.setState({ scanning: !this.state.scanning });
  }

  _onDetected(result) {
    this.setState({ results: this.state.results.concat([result]) })
  }

  render() {
    return (
      <div className="scan-product-container">
        <h2 style={{ textAlign: "right" }}>
          {" "}
          total amount: {this.state.scannedProducts}
        </h2>
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
          <Scanner onDetected={this.state._onDetected} />
        ) : null}
      </div>
    )
  }
}

export default ScanProduct
