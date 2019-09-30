import React, { Component } from 'react';
import { connect } from 'react-redux';

class Responses extends Component {
    render() {
        console.log(this.props.reduxStore)
        return (
            <section>
                <h1>Responses</h1>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Feelings:</th>
                            <td>{this.props.reduxStore.feelingResponseReducer}</td>
                        </tr>
                        <tr>
                            <th>Understanding:</th>
                            <td>{this.props.reduxStore.understandingResponseReducer}</td>
                        </tr>
                        <tr>
                            <th>Support:</th>
                            <td>{this.props.reduxStore.supportResponseReducer}</td>
                        </tr>
                        <tr>
                            <th>Comments:</th>
                            <td>{this.props.reduxStore.commentsResponseReducer}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        )
    }
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Responses);