// == Import
import { useState } from 'react';
import githubLogo from 'src/assets/images/logo-github.png';
import './styles.css';
// import data from 'src/data/repos';
import axios from 'axios';

// == Composant
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from '../ReposResults';

const App = () => {
  const [isSearch, setIsSearch] = useState(false);

  const toggleIsSearch = () => {
    setIsSearch(!isSearch);
  };
  console.log(isSearch);

  const [inputSearch, setInputSearch] = useState('');

  const getInputSearch = (inputValue) => {
    setInputSearch(inputValue);
  };

  const [articles, setArticles] = useState([]);
  const [nbArticles, setNbArticles] = useState('');

  const loadArticles = () => {
    axios.get(`https://api.github.com/search/repositories?q=${inputSearch}`)
      .then((response) => {
        setArticles(response.data.items);
        console.log(response);
        setNbArticles(response.data.total_count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="app">
      <img src={githubLogo} alt="github logo" />
      <SearchBar
        getInput={getInputSearch}
        loadArticles={loadArticles}
        updateIsSearch={toggleIsSearch}
      />
      <Message nbArticles={nbArticles} isSearch={isSearch} />
      <ReposResults data={articles} />
    </div>
  );
};

// == Export
export default App;
