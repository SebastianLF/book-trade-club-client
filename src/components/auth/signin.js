import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import * as actions from '../../actions'

class Signin extends React.Component {

  handleFormSubmit({ email, password }){
    console.log(email, password);
    console.log(this.props);
    this.props.signinUser({ email, password});
  }

  renderAlert(){
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> { this.props.errorMessage }
        </div>
      )
    }
  }

  render () {
    const { handleSubmit, fields: { email, password } } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="m-b-2 m-t-3"><i className="fa fa-sign-in" aria-hidden="true"></i> Sign In</h1>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <input {...email}  className="form-control form-control-lg" placeholder="Email"/>
          </fieldset>
          <fieldset className="form-group">
            <input {...password} type="password" className="form-control form-control-lg" placeholder="Password"/>
          </fieldset>
          { this.renderAlert() }
          <button action="submit" className="btn btn-success p-x-3 p-y-1 text-uppercase">Sign in</button>
        </form>
      </div>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
}, mapStateToProps, actions)(Signin);
