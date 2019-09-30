import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
};
class Feeling extends Component {
    state = {
        feelingResponse: '',
        understandingResponse: '',
        supportedResponse: '',
        commentsResponse: '',
    }
    handleSubmit = () => {
        console.log('clicked handleSubmit');
        if (this.state.feelingResponse === '') {
            alert('Please check box before proceeding')
        } else {
            this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feelingResponse })
            this.props.history.push('/Understanding');
        } return
    }

    handleChange = (event) => {
        this.setState({
            feelingResponse: event.target.value
        })
    }

    render() {
        console.log(this.state)
        return (
            <div>
                
                <div className="inputDiv">
                    <h2>
                        How are you feeling today?
          </h2>
                    <form className="checkbox">
                        1
           <Checkbox
                            checked={this.state.feelingResponse === '1'}
                            onChange={this.handleChange}
                            value='1'
                            color="primary"
                            aria-label='1'
                        />
                        2
        <Checkbox
                            checked={this.state.feelingResponse === '2'}
                            onChange={this.handleChange}
                            value='2'
                            aria-label='2'
                            color="primary"
                        />
                        3
        <Checkbox
                            checked={this.state.feelingResponse === '3'}
                            onChange={this.handleChange}
                            value='3'
                            aria-label='3'
                            color="primary"
                        />
                        4
        <Checkbox
                            checked={this.state.feelingResponse === '4'}
                            onChange={this.handleChange}
                            value="4"
                            aria-label='4'
                            color="primary"
                        />
                        5
        <Checkbox
                            checked={this.state.feelingResponse === '5'}
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

export default withStyles(styles)(connect(mapStateToProps)(Feeling));