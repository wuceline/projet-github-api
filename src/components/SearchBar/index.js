import './searchbar.scss';
// import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = ({ getInput, loadArticles, updateIsSearch }) => (
  <div className="searchBar">
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        loadArticles();
        updateIsSearch();
      }}
    >
      <Input
        fluid
        icon="search"
        iconPosition="left"
        placeholder="Search..."
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
  updateIsSearch: PropTypes.func.isRequired,
};

export default SearchBar;
