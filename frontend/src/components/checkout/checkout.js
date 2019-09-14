import React, { Component } from 'react';

class CheckoutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            groenies: "",
        }
    }

    componentDidMount() {
        this.props.productsService.getUserDetails();
        this.props.productsService.userDetails$.subscribe(user => {
            if (user) {
                console.log(user);
                this.setState({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    groenies: user.groenies
                })
            }
        })
    }

    render() {
        return (
            <div>
                Checkout Page
            {this.state.firstName}
                {this.state.lastName}
                {this.state.groenies}
            </div>
        );
    }
}

export default CheckoutComponent;