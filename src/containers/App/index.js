import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import store from '../../store';
import AddContactPage from '../AddContactPage';
import HomePage from '../HomePage';
import FavoritesPage from '../FavoritesPage';
import EditContactPage from '../EditContactPage';

const HomeWrapper = styled.div`
  display: flex;
  min-height: 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const InnerContent = styled.div`
  padding: 3rem;
  height: 90vh;
  overflow: scroll;
`;

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <HomeWrapper>
          <SideBar />
          <ContentWrapper>
            <Header />
            <InnerContent>
              <Switch>
                <Route path="/edit-contact/:id" component={EditContactPage} />
                <Route path="/add-contact" component={AddContactPage} />
                <Route path="/favorites" component={FavoritesPage} />
                <Route path="/" component={HomePage} />
              </Switch>
            </InnerContent>
          </ContentWrapper>
        </HomeWrapper>
      </Router>
    </Provider>
  );
}
