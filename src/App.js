import axios from 'axios';
import './App.css';
import { Components } from './components';
import MainRoutes from './routes';

axios.defaults.baseURL = 'turkmedgem.pythonanywhere.com'

function App() {
  const width = window.innerWidth
  return (
    <div className="App">
      <Components.NavbarTop />
      <Components.NavbarDown />
      {width <= 500 && <div style={{height: '100px'}}></div>}
      <MainRoutes/>
      <Components.Footer/>
    </div>
  );
}

export default App;
