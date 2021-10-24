import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './views/HomePage';
import ErrorPage from './components/ErrorPage';


function App() {
  return (
    <>
      <Navigation />
      <Switch>
       <Route path="/" exact>
              <HomePage />
            </Route>
 <Route>
              <ErrorPage />
            </Route>
          </Switch>
      </>
  );
}

export default App;
