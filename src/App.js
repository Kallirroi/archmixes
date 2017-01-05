import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import Title from './Title';
import ButtonHome from './ButtonHome';
import ButtonYoutube from './ButtonYoutube';
import ButtonFeed from './ButtonFeed';
import FeedImages from './FeedImages';
import Modal from './Modal';
import Icons from './Icons';
import ContentImages from './ContentImages';
import Content from './Content';
import ContentFooter from './ContentFooter';

import './App.css';
import './normalize.css';
import './skeleton.css';

const Home = () => <div><Links /></div>;
const Live = () => <div><Modal/><Links /></div>;
const Feed = () => <div><FeedImages/><Links /></div>;

const Links = () =>
    <nav>
      <Link to="/"><ButtonHome/></Link> <br/>
      <Link to="live"><ButtonYoutube/></Link> <br/>
      <Link to="feed"><ButtonFeed/></Link>
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
