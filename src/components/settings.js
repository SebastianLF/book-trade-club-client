import React, { PropTypes } from 'react'

class Settings extends React.Component {
  render () {
    return (
      <div className="container m-t-3">

          <div className="row ">
            <form className="col-md-6">
              <h1 className="display-4"><i className="fa fa-user" aria-hidden="true"></i> Update profile</h1>
              <fieldset className="form-group m-t-2">
                <input type="text" className="form-control form-control-lg" id="City" placeholder="City"></input>
              </fieldset>
              <fieldset className="form-group ">
                <input type="text" className="form-control form-control-lg" id="State" placeholder="State"></input>
              </fieldset>
              <button type="submit" className="btn btn-success p-x-3 p-y-1 text-uppercase">Update</button>
            </form>
          </div>
          <div className="row m-t-3">
          <form className="col-md-6">
            <h1 className="display-4"><i className="fa fa-key" aria-hidden="true"></i> Change password</h1>
            <fieldset className="form-group m-t-2">
              <input type="text" className="form-control form-control-lg" id="currpassword" placeholder="Current Password"></input>
            </fieldset>
            <fieldset className="form-group">
              <input type="text" className="form-control form-control-lg" id="newpassword" placeholder="New Password"></input>
            </fieldset>
              <button type="submit" className="btn btn-success p-x-3 p-y-1 text-uppercase">Update</button>
          </form>
          </div>
      </div>
    )
  }
}

export default Settings;
