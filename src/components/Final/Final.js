import React, { Component } from 'react';
import { connect } from 'react-redux';

class Final extends Component {

    state = null;

  
    handleSubmit = () => {
        console.log('clicked handleSubmit');
        this.props.dispatch({ type: 'NEW_FEEDBACK', payload: this.state })
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="inputDiv">
                <h1>Thanks for submitting your feedback!</h1>
                <button onClick={this.handleSubmit}>Leave New Feedback</button>
            </div>
        )
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Final);