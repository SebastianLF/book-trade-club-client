import React, { Component } from 'react';
import Header from './header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
          { this.props.children}
        <footer className="footer center clearfix">
          <div className="container">
            <span className="text-muted">Copyright 2016 slfweb</span>
          </div>
        </footer>
      </div>
    );
  }
}
