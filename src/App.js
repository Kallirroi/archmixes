import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import Title from './Title';
import ButtonYoutube from './ButtonYoutube';
import ButtonFeed from './ButtonFeed';
import Icons from './Icons';
import ContentImages from './ContentImages';
import Content from './Content';
import ContentFooter from './ContentFooter';

import './App.css';
import './normalize.css';
import './skeleton.css';

const Home = () => <div><Links /></div>;
const Live = () => <div><Links /></div>;
const Feed = () => <div><Links /></div>;

const Links = () =>
    <nav>
      <Link to="/">Home</Link> <br/>
      <Link to="live">Watch it live</Link> <br/>
      <Link to="feed">Feed</Link>
    </nav>

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <Router history={ browserHistory }>
            <Route path="/" component={Home}></Route>
            <Route path="/live" component={Live}></Route>
            <Route path="/feed" component={Feed}></Route>
          </Router>

          <ButtonYoutube/>
          <ButtonFeed/>
          <Title/>
          <Icons/>
          <ContentImages/>
          <Content/>
          <ContentFooter/>
        </div>
      </div>
    );
  }
}

export default App;
