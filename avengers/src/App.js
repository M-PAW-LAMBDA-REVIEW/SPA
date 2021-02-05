import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import AvengersList from './components/AvengersList';
import NavBar from './components/NavBar';
import SingleAvenger from './components/SingleAvenger';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/avengers" component={AvengersList} />
      <Route path='/avengers/:avengerId' component={SingleAvenger} />
    </div>
  );
}

export default App;
