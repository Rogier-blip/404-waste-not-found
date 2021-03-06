import { BehaviorSubject } from "rxjs"
import axios from "axios"

export default class ProductsService {
    productsScanned = []
    barcodes = []
    instance = ProductsService
    userDetails;


    static getInstance() {
        if (!ProductsService.instance) {
            ProductsService.instance = new ProductsService()
        }

        return ProductsService.instance
    }


    productsCounter$ = new BehaviorSubject(null);
    productIsValid$ = new BehaviorSubject(false);
    scannedProducts$ = new BehaviorSubject([]);
    qrSubject$ = new BehaviorSubject("");

    userDetails$ = new BehaviorSubject({
        firstName: "",
        lastName: "",
        groenies: "",
    });

    addProductCounter(value) {
        this.productsCounter$.next(value)
    }

    getBarcodes() {
        axios
            .get("http://localhost:3000/product/barcodes")
            .then(result => {
                this.barcodes = result.data
            })
            .catch(error => {
                console.log(error)
            })
    }

    checkForExistanceOfBarcode(barcode) {
        return this.barcodes.find(item => item === barcode)
    }

    addProductToBasket(products) {
        this.scannedProducts$.next(products);
    }

    getProductBasedOnBarcode(barcode) {

        axios.get('http://localhost:3000/product/details/' + barcode.codeResult.code)
            .then(result => {
                if (result.data.length > 0) {
                    this.productsScanned.push(result.data[0]);
                    this.addProductToBasket(this.productsScanned);
                    this.productIsValid$.next(true);
                } else {
                    this.productIsValid$.next(false);
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    getUserDetails() {
        axios.get('http://localhost:3000/user/get')
            .then(result => {
                this.userDetails$.next(result.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    onQrClick() {
        console.log('ok');
        axios.get('http://localhost:3000/user/earn-groenies/' + "12345")
            .then(result => {
                if (result) {
                    ProductsService.instance.qrSubject$.next(result.data);

                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    addPoints() {
        let totalPoints = 0;
        ProductsService.instance.scannedProducts$.subscribe(scannedProducts => {
            scannedProducts.forEach(product => {
                totalPoints += Number(product.groenies);
            });

            axios.post('http://localhost:3000/user/collect-groenies/12345/' + totalPoints.toString())
                .then(result => {
                    this.getUserDetails();
                })
                .catch(error => {
                    console.log(error)
                });
        });
    }
}
