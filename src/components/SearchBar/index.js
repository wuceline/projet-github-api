import './searchbar.scss';
// import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchBar = () => (
  <div className="searchBar">
    <Input icon="search" iconPosition="left" placeholder="Search..." />
  </div>
);

export default SearchBar;
