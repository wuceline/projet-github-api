// == Import
import { useState } from 'react';
import githubLogo from 'src/assets/images/logo-github.png';
import './styles.css';
import data from 'src/data/repos';
import axios from 'axios';

// == Composant
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from '../ReposResults';

const App = () => {
  const [inputSearch, setInputSearch] = useState('');

  const getInputSearch = (inputValue) => {
    // console.log(inputValue);
    setInputSearch(inputValue);
  };

  const [articles, setArticles] = useState([]);

  // console.log(inputSearch);

  const loadArticles = () => {
    axios.get(`https://api.github.com/search/repositories?q=${inputSearch}`)
      .then((response) => {
        setArticles(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // console.log(inputSearch);
  console.log(articles);
  // console.log(loadArticles);

  // const [filteredArticles, setFilteredArticles] = useState([]);

  // const getFilteredArticles = () => {
  //   const articlesFiltered = data.items.filter((currentArticle) => {
  //     const currentArticleLowered = currentArticle.name.toLowerCase();
  //     const inputSearchLowered = inputSearch.toLowerCase();
  //     console.log(inputSearchLowered);

  //     return currentArticleLowered.includes(inputSearchLowered);
  //   });

  //   setFilteredArticles(articlesFiltered);
  // };

  return (
    <div className="app">
      <img src={githubLogo} alt="github logo" />
      <SearchBar getInput={getInputSearch} loadArticles={loadArticles} />
      <Message dataCount={data.total_count} />
      <ReposResults data={articles} />
    </div>
  );
};

// == Export
export default App;
