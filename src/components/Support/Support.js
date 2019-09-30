import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';

class Support extends Component {
    state = {
        feelingResponse: '',
        understandingResponse: '',
        supportResponse: '',
        commentsResponse: '',
    }
    handleSubmit = () => {
        console.log('clicked handleSubmit');
        if (this.state.supportResponse === '') {
            alert('Please check box before proceeding')
        } else {
            this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.supportResponse })
            this.props.history.push('/Comments');
        } return
    }

    handleChange = (event) => {
        this.setState({
            ...this.state.supportResponse,
            supportResponse: event.target.value
        })
    }
    render() {
        return (
            <div>
                <div className="inputDiv">
                    <h2>
                        How well are you being supported ?
            </h2>
                    <form className="checkbox">
                        1
           <Checkbox
                            checked={this.state.supportResponse === '1'}
                            onChange={this.handleChange}
                            value='1'
                            color="primary"
                            aria-label='1'
                        />
                        2
        <Checkbox
                            checked={this.state.supportResponse === '2'}
                            onChange={this.handleChange}
                            value='2'
                            aria-label='2'
                            color="primary"
                        />
                        3
        <Checkbox
                            checked={this.state.supportResponse === '3'}
                            onChange={this.handleChange}
                            value='3'
                            aria-label='3'
                            color="primary"
                        />
                        4
        <Checkbox
                            checked={this.state.supportResponse === '4'}
                            onChange={this.handleChange}
                            value="4"
                            aria-label='4'
                            color="primary"
                        />
                        5
        <Checkbox
                            checked={this.state.supportResponse === '5'}
                            onChange={this.handleChange}
                            value="5"
                            aria-label='5'
                            color="primary"
                        />
                        {/* <input type="number" min="1" max="5" onChange={this.handleChange}/> */}
                    </form>
                    <button onClick={this.handleSubmit}>Next</button>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Support);