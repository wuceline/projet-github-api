// == Import
import githubLogo from 'src/assets/images/logo-github.png';
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <img src={githubLogo} alt="github logo" />
    <h1>Composant : App</h1>
  </div>
);

// == Export
export default App;
