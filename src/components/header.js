import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import { Link, browserHistory } from 'react-router'
import {signOutUser} from '../actions'

class Header extends React.Component {

  handleSignOutClick(e){
    e.preventDefault();
  }

  renderLinks(){
    if (this.props.authenticated) {
      return <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <a className="nav-link" href="#">All books</a>
        </li>
        <li className="nav-item">
          <Link to="/mybooks" className="nav-link">My books</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
          Email
          </a>
          <div className="dropdown-menu" aria-labelledby="Preview">
          <Link to="/settings" className="dropdown-item"><i className="fa fa-cog"></i> Settings</Link>
            <div className="dropdown-divider"></div>
          <a onClick={this.handleSignOutClick.bind(this)} href="#" className="dropdown-item"><i className="fa fa-sign-out"></i> Sign out</a>
          </div>
        </li>
      </ul>
    } else {
      return <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/signin" className="nav-link">Sign in</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">Sign up</Link>
        </li>
      </ul>
    }
  }

  render () {
    return (
      <div className="container p-y-2">
        <nav className="navbar navbar-light">
          <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#navbar-header" aria-controls="navbar-header">
            ☰
          </button>
          <div className="collapse navbar-toggleable-xs" id="navbar-header">
            <Link to="/" className="navbar-brand">TBC</Link>
            { this.renderLinks() }
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
