import React, { Component, PropTypes } from 'react'
import {reduxForm} from 'redux-form'
import { signupUser } from '../../actions'

class Signup extends Component {

  handleFormSubmit(formProps){
    this.props.dispatch(signupUser(formProps))
  }

  render () {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
        <h1 className="m-b-2 m-t-3"><i className="fa fa-user-plus" aria-hidden="true"></i> Sign Up</h1>

        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <fieldset className="form-group">
            <input className="form-control form-control-lg" {...email} placeholder="Email"/>
            {email.touched && email.error && <div className="text-danger">{email.error}</div>}
          </fieldset>
          <fieldset className="form-group">
            <input className="form-control form-control-lg" type="password" {...password} placeholder="Password"/>
            {password.touched && password.error && <div className="text-danger">{password.error}</div>}
          </fieldset>
          <fieldset className="form-group">
            <input className="form-control form-control-lg" type="password" {...passwordConfirm} placeholder="Confirm password"/>
            {passwordConfirm.touched && passwordConfirm.error && <div className="text-danger">{passwordConfirm.error}</div>}
          </fieldset>
          {this.props.errorMessage ?
              <div className="alert alert-danger">
                <strong>Oops!</strong> { this.props.errorMessage }
              </div>
              : ''
          }
          <button type="submit" name="button" className="btn btn-success p-x-3 p-y-1 text-uppercase">Sign up</button>
        </form>
        </div>
        </div>
      </div>
    );
  }
}

function validate(formProps){
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if(formProps.password !== formProps.passwordConfirm){
    errors.password = 'Password must match'
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter an password confirmation';
  }

  return errors;
}

function mapStateToProps(state){
  return { errorMessage: state.auth.error }
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps)(Signup);
