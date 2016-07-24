import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import BookList from '../booklist/booklist'
import Bar from '../optionsBar/bar'

class Home extends React.Component {
  render () {

    return (
    <div>
      <div className="header-sub p-y-3">
        <div className="container">
          <h1 className="display-3">Book Trading Club</h1>
          <p className="lead">Trade books as you were friend!</p>
          <Link to="/signup"><button type="button" className="btn btn-success p-x-2 p-y-1 text-uppercase">TRY NOW !</button></Link>
        </div>
      </div>
      <div className="content p-y-3 m-b-3">
        <div className="container ">
          <h1 className="display-4 text-xs-center p-t-3 p-b-1">How it works</h1>
          <hr className="primary" />
          <div className="row row-padded homepage-grid row-bordered p-t text-xs-center p-y-3 ">
            <div className="col-sm-4 ">
              <div className="overlay-sub-content p-a-2">
              <i className="fa fa-camera-retro fa-5x text-success"></i>
              <h4 className="subtitle ">Make a list</h4>
                <p className="text-muted lead">Each theme features new components built to the same level of quality as Bootstrap and highlighted with several example pages.</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="overlay-sub-content p-a-2">
              <i className="fa fa-camera-retro fa-5x text-success"></i>
              <h4 className="subtitle ">Trade books</h4>
                <p className="text-muted lead">Each theme features new components built to the same level of quality as Bootstrap and highlighted with several example pages.</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="overlay-sub-content p-a-2">
              <i className="fa fa-camera-retro fa-5x text-success"></i>
              <h4 className="subtitle ">Enjoy reading!</h4>
                <p className="text-muted lead">Each theme features new components built to the same level of quality as Bootstrap and highlighted with several example pages.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>)
  }
}

export default Home;
