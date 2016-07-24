import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getTradeList } from '../actions'
import Book from '../components/book'

class TradeList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.props.dispatch(getTradeList());
  }

  render () {
    return (<div>
      { this.props.tradelist.map( (book, i) =>
        {
              <Book {...book}/>
        })
      }
    </div>)
  }
}

const mapStateToProps = ({ tradelist }) => {
  console.log(tradelist);
  return {
    tradelist
  }
}

export default connect(mapStateToProps)(TradeList);
