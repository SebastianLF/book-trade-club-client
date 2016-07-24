import React, { PropTypes } from 'react'

const Book = (props) => {
  return (
        <div className="card">
          <img className="card-img-top" src={props.volumeInfo.imageLinks.thumbnail} alt="Card image cap" />
        </div>
  )
}

export default Book
