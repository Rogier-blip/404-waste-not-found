import React, { Component } from "react"
import Quagga from "quagga";
class Scanner extends Component {
  constructor(props) {
    super(props)
    this._onDetected = this._onDetected.bind(this)
  }
  componentDidMount() {
    Quagga.init({
      inputStream: {
        type: 'LiveStream',
        constraints: {
          width: 640,
          height: 480,
          facingMode: 'environment', // or user
        },
      },
      locator: {
        patchSize: 'medium',
        halfSample: true,
      },
      numOfWorkers: 2,
      decoder: {
        readers: ['ean_reader'],
      },
      locate: true,
    }, function (err) {
      if (err) {
        console.log(err);
        return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
    });
    console.log("component did mount.")
    Quagga.onDetected(this._onDetected)
  }
  componentWillUnmount() {
    Quagga.offDetected(this._onDetected)
  }
  _onDetected(result) {
    console.log("ok1")
    console.log(result.codeResult.code);
    if (result) {
      Quagga.offDetected(this._onDetected);
    }
    // this.props.onDetected(result);
  }



  render() {
    return <div id="interactive" className="viewport" />
  }
}
export default Scanner