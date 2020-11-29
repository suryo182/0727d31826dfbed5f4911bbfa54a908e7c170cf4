import { fireEvent, render } from '@testing-library/react';
import store from '../../../store';
import { Provider } from 'react-redux';
import App from '../../../containers/App';
import SideBar from '..';

describe('Sidebar should work properly', () => {
  test('Favorite link should redirect to /favorites', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App>
          <SideBar />
        </App>
      </Provider>
    );
    fireEvent.click(getByTestId('favorites-sidebar-link'));
    expect(getByTestId('favorites-page')).toBeInTheDocument();
  });
});
