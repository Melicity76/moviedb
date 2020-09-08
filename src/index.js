import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./searchMovies";
import {Footer} from "./footer";
import {LandingPage} from "./maincontent";
import Title from './titlemainblue.png';
import {Watchone} from './watchone';
import './index.css';
class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="header">
        <h1 className="title"><img class="title" src={Title} alt="Title" /></h1>
        <SearchMovies/>
        <LandingPage/>
        <Watchone/>
        <hideMainContent/>
        <Footer />
        </div>       
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));