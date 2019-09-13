import React, {Component} from "react"
import axios from "axios"

class Fetch extends Component {
    state = {
        loading: false,
        error: false,
        request: {
            text: ''
        },
    };

    componentDidMount() {
        this.fetchRicksPupper()
    }

    // This data is fetched at run time on the client.
    fetchRicksPupper = () => {
        this.setState({loading: true});

        axios
            .get(`http://localhost:3000/`)
            .then(request => {
                this.setState({
                    loading: false,
                    request: {
                        text: request.data
                    },
                })
            })
            .catch(error => {
                this.setState({loading: false, error})
            });
    };

    render() {
        const text = this.state.request.text;

        return (
            <div>
                <span>{text}</span>
            </div>
        );
    }
}
export default Fetch
