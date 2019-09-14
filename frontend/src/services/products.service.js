import { BehaviorSubject } from "rxjs"
import axios from "axios"

export default class ProductsService {
  productsScanned = []
  barcodes = []
  instance = ProductsService

  static getInstance() {
    if (!ProductsService.instance) {
      ProductsService.instance = new ProductsService()
    }

    return ProductsService.instance
  }

  productsCounter$ = new BehaviorSubject(null)

  addProductCounter(value) {
    this.productsCounter$.next(value)
  }

  getBarcodes() {
    axios
      .get("http://localhost:3000/product/barcodes")
      .then(result => {
        this.barcodes = result.data
        console.log(this.barcodes)
      })
      .catch(error => {
        console.log(error)
      })
  }

  checkForExistanceOfBarcode(barcode) {
    console.log(barcode)
    return this.barcodes.find(item => item === barcode)
  }

  getProductBasedOnBarcode(barcode) {
    if (this.checkForExistanceOfBarcode(barcode)) {
      axios
        .get("http://localhost:3000/product/details/" + barcode.codeResult.code)
        .then(result => {
          if (result.data.length > 0) {
            this.productsScanned.push(result.data[0])
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
