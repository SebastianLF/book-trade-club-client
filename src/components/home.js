import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import BookList from '../booklist/booklist'
import Bar from '../optionsBar/bar'

class Home extends React.Component {
  render () {
    return (
    <div>
      <div className="header-sub p-y-3 m-b-3">
        <div className="container">
          <h1 className="display-3">Trading Book Club</h1>
          <p className="lead">Trade books as you were friend!</p>
          <Link to="/signup"><button type="button" className="btn btn-success p-x-2 p-y-1 text-uppercase">Trade your books now!</button></Link>
        </div>
        <img className="hidden-xs" src="../img/books.jpg" alt="books" />
      </div>
      <Bar />
      <BookList />
      <div className="container">
        <h1 className="text-uppercase">how it works</h1>
        <div className="row row-padded homepage-grid row-bordered p-t text-center">
          <div className="col-sm-4">
            <img className="homepage-grid-icon" src="//cdn.shopify.com/s/files/1/0691/5403/t/123/assets/components-icon.svg?13701263572696252361" />
            <h5><strong>Components and examples</strong></h5>
            <p className="text-muted">Each theme features new components built to the same level of quality as Bootstrap and highlighted with several example pages.</p>
          </div>

          <div className="col-sm-4">
            <img className="homepage-grid-icon" src="//cdn.shopify.com/s/files/1/0691/5403/t/123/assets/sliders-icon.svg?13701263572696252361" />
            <h5><strong>Tons of variables</strong></h5>
            <p className="text-muted">Theme components inherit much of their style from variables, exactly like Bootstrap. Change a few values and the theme adapts.</p>
          </div>

          <div className="col-sm-4">
            <img className="homepage-grid-icon" src="//cdn.shopify.com/s/files/1/0691/5403/t/123/assets/wrenches-icon.svg?13701263572696252361" />
            <h5><strong>Source files and tools</strong></h5>
            <p className="text-muted">Each Bootstrap theme includes all the source and compiled files you'll need, including npm and Gulp based build tools.</p>
          </div>
        </div>
      </div>

    </div>)
  }
}

export default Home;
