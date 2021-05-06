
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import Routes from './routes';
import { CssBaseline }from '@material-ui/core';
import Header from './atoms/header';
import Footer from './atoms/footer';

//redux
import { Provider } from 'react-redux';
import store from './redux/store';

function App()  {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router>
        <Header />
        <main id='content'>
          <Switch>
            <Route path='*' component={Routes}/>
          </Switch>
        </main>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App;