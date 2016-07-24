import React, { Component } from 'react';
import Header from './header'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="top-header">
          <div className="container text-xs-center">
            <div className="row">
              <a target="_blank" href="http://www.upwork.com/o/profiles/users/_~017bd32b7c9367e3a3/"><img className="img-responsive" width="80px" src="img/upwork.png" alt="upwork profile" /> <span className="text-muted"><i className="fa fa-user"></i> Sebastien LEON FLORES</span></a>
            </div>
          </div>
        </div>
        <Header></Header>
          { this.props.children}
        <footer className="footer center clearfix ">
          <div className="container text-xs-center">
            <span className="text-muted">&copy; 2016 - slfweb</span>
          </div>
        </footer>
      </div>
    );
  }
}
