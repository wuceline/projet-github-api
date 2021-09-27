// == Import
import githubLogo from 'src/assets/images/logo-github.png';
import './styles.css';
// import data from 'src/data/repos';

// == Composant
import SearchBar from 'src/components/SearchBar';
import ReposResults from '../ReposResults';
import Message from 'src/components/Message';

const App = () => (
  <div className="app">
    <img src={githubLogo} alt="github logo" />
    <SearchBar />
    <Message />
    <ReposResults />

  </div>
);

// == Export
export default App;
