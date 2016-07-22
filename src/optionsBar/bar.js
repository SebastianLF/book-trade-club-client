import React, { PropTypes } from 'react'
import Select from 'react-select';

const Bar = (props) => {
  var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
  ];

  function logChange(val) {
      console.log("Selected: " + val);
  }



  return (
    <div className="container m-b-2">
      <input className="form-control form-control-lg" onKeyUp={() => console.log('ok')} placeholder="Search a book by title"></input>
    </div>
  )
}

export default Bar
