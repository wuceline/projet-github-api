// == Import
import githubLogo from 'src/assets/images/logo-github.png';
import './styles.css';
import data from 'src/data/repos';

// == Composant
import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import ReposResults from '../ReposResults';

const App = () => {
  console.log(data.items);
  return (
    <div className="app">
      <img src={githubLogo} alt="github logo" />
      <SearchBar />
      <Message dataCount={data.total_count} />
      <ReposResults data={data.items} />
    </div>
  );
};

// == Export
export default App;
