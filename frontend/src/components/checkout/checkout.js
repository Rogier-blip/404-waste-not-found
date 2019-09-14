import React, { Component } from 'react';

class CheckoutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            groenies: "",
            qrImageString: ""
        }
    }

    componentDidMount() {
        this.props.productsService.getUserDetails();
        this.props.productsService.userDetails$.subscribe(user => {
            if (user) {
                this.setState({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    groenies: user.groenies
                })
            }
        })
        this.props.productsService.qrSubject$.subscribe(qrString => {
            if (qrString) {
                this.setState({ qrImageString: qrString })
            }
        })
    }


    render() {
        const qrImage = this.state.qrImageString !== "" ? (<div className={'row'}>
            <img width={300} height={300} src={this.state.qrImageString}></img>
        </div>) : null;

        const buttonForQR = this.state.qrImageString === "" ? <div className={'row'} >
            <button className={'btn btn-primary'} style={{
                background: "#FDC513",
                color: "black",
                borderColor: "#FDC513",
            }} onClick={this.props.productsService.onQrClick}>Get your Coupon</button>
        </div> : null;

        return (
            <div className={'row'}>
                <div className={'col-6'}>
                    <div>
                        Name: {this.state.firstName} {this.state.lastName}
                    </div>
                    <div>Groenies: {this.state.groenies}</div>
                </div>
                <div className={'col-6'}>
                    {qrImage}
                    {buttonForQR}
                </div>
            </div >
        );
    }
}

export default CheckoutComponent;
