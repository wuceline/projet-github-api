// == Import
import githubLogo from 'src/assets/images/logo-github.png';
import './styles.css';
// import 'semantic-ui-css/semantic.min.css';

// == Composant
import SearchBar from 'src/components/SearchBar';

const App = () => (
  <div className="app">
    <img src={githubLogo} alt="github logo" />
    <SearchBar />
  </div>
);

// == Export
export default App;
