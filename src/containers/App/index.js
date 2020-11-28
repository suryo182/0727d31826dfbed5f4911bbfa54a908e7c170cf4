import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../../store';
import AddContactPage from '../AddContactPage';
import HomePage from '../HomePage';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/add-contact" component={AddContactPage} />
        </Switch>
      </Router>
    </Provider>
  );
}
