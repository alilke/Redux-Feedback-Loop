import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import Responses from '../Responses/Responses';



class Review extends Component {
    handleSubmit = () => {
        console.log('clicked handleSubmit');
        Axios.post('/allResponses', this.props.reduxStore)
            .then(response => {
                console.log(response);
                this.props.history.push('/Final');
            }).catch(error => {
                console.log('error posting to server', error)
            })
    }

    render() {
        console.log(this.props.reduxStore);
        return (
                <div className="inputDiv">
                    <h1>Submit Your Feedback</h1>
                <Responses />
                <button onClick={this.handleSubmit}>Submit</button>

            </div>
        )
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);