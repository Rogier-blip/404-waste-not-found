import React, { Component } from "react"
import Result from "./result"
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
  _scan() {
    this.setState({ scanning: !this.state.scanning })
  }
  _onDetected(result) {
    console.log('ok')
    console.log(result)
    this.setState({ results: this.state.results.concat([result]) })
  }
  render() {
    return (
      <div>
        <button onClick={this._scan}>
          {this.state.scanning ? "Stop" : "Start"}
        </button>
        <p>{this.state.results}</p>
        {this.state.scanning ? (
          <Scanner onDetected={this.state._onDetected} />
        ) : null}
      </div>
    )
  }
}
export default ScanProductComponent