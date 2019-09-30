import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Final from '../Final/Final';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br />
        <Router>
          <Route exact path='/' component={Feeling} />
          <Route path='/Understanding' component={Understanding} />
          <Route path='/Support' component={Support} />
          <Route path='/Comments' component={Comments} />
          <Route path='/Review' component={Review} />
          <Route path='/Final' component={Final} />
        </Router>
        
      </div>
    );
  }
}

export default connect()(App);