import React, { PropTypes } from 'react'
import Select from 'react-select'
import axios from 'axios'

class Mybooks extends React.Component {

  construct(){
    this.state = {
      booksGoogleList: []
    }
  }

  fetchGoogleBooksList(){
    console.log('ok');
    axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers')
    .then((response) => {
      console.log(response.data);
      this.setState({
        booksGoogleList: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    var options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ];
    return (
      <div className="container m-t-3">
        <button type="button" name="button" className="btn btn-success p-x-3 p-y-1"><i className="fa fa-flag" aria-hidden="true"></i> Your trade request (0 outstanding)</button>
        <button type="button" name="button" className="btn btn-primary p-x-3 p-y-1"><i className="fa fa-flag" aria-hidden="true"></i> Trade requests for you (0 unapproved)</button>

        <h1 className="display-4 m-t-3 m-b-1">Requests from other users:</h1>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item">
                <span className="label label-default label-pill pull-xs-right"><i className="text-success fa fa-check fa-lg"></i> <i className="text-danger fa fa-times fa-lg"></i></span>
                Cras justo odio
              </li>
            </ul>
          </div>
        </div>

        <h1 className="display-4 m-t-3 m-b-1">My books:</h1>
          <div className="row">
            <div className="col-md-6">
              <form className="form-inline">
                <select type="password" className="form-control form-control-lg" placeholder="Password" />
                <button type="submit" className="btn btn-success p-x-3 p-y-1 text-uppercase">Add to list</button>
              </form>
            </div>
          </div>
        </div>
    )
  }
}

export default Mybooks;
