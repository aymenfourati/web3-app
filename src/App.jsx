import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';

function App() {

  return (
<Router>
  <div className="App">
    <Header/>
    <div>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/AboutUs">
            <AboutUs/>
        </Route>
      </Switch>
    </div>
  </div>

</Router>
  );
}

export default App;
