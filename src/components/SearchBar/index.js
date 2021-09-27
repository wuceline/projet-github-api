import './searchbar.scss';
// import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = ({ getInput, loadArticles }) => (
  <div className="searchBar">
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        loadArticles();
      }}
    >
      <Input
        fluid
        icon="search"
        iconPosition="left"
        placeholder="Search..."
        // onKeyUp={(event) => {
        //   if (event.key === 'Enter') {
        //     getInput(event.target.value);
        //   }
        // }}
        onChange={(event) => {
          getInput(event.target.value);
        }}
      />

    </form>

  </div>
);

SearchBar.propTypes = {
  getInput: PropTypes.func.isRequired,
  loadArticles: PropTypes.func.isRequired,
};

export default SearchBar;
