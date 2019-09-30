import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});
class Comments extends Component {
    state = {
        feelingResponse: '',
        understandingResponse: '',
        supportResponse: '',
        commentsResponse: '',
    }
    handleSubmit = () => {
        console.log('clicked handleSubmit');
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.commentsResponse })
        this.props.history.push('/Review');
    }

   handleChange = (event) => {
        this.setState({
            commentsResponse: event.target.value
        })
    }

    render() {
        const { classes } = this.props;
        if (this.state.commentsResponse === '') {
            return (
                <div>
                    <div className="inputDiv">
                        <h2>Any Comments?
            </h2>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Comments"
                            multiline
                            rowsMax="4"
                            value={this.state.commentsResponse}
                            onChange={this.handleChange}
                            className={classes.textField}
                            margin="normal"
                        />
                        <br />
                        <button className="disabledBtn">Add Comment to Submit</button>
                    </div>
                </div>
            )
        } else if (this.state.comments !== '') {
            return (
                <div>
                    <div className="inputDiv">
                        <h2>
                            Any comments?
        </h2>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Comments"
                            multiline
                            rowsMax="4"
                            value={this.state.commentsResponse}
                            onChange={this.handleChange}
                            className={classes.textField}
                            margin="normal"
                        />
                        <br />
                        <button onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
            )
        }
    }
}


const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles) (connect(mapStateToProps)(Comments));