import React from 'react';
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getBooks } from '../actions'
import debounce from 'lodash/debounce'
import InputGroup from 'react-bootstrap/InputGroup';

const Search = ({ getBooks, query }) => {

  const debouncedGetBooks = debounce(query => {
    getBooks(query);
  }, 700);

  const onInputChange = e => {
    e.preventDefault();
    debouncedGetBooks(e.target.value)
  }

  return (
    <div className="search-books">
      <div className='title'>
        Search the world's most comprehensive index of full-text books
      </div>
        <InputGroup className="mb-3 danger">
          <Form.Control
            type="text" onChange={onInputChange} placeholder="Sargon, /(reg)ex/, full text" 
          />
        </InputGroup>
    </div>
  )
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    query: state.books.query
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getBooks
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);