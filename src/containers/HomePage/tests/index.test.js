import { fireEvent, render } from '@testing-library/react';
import store from '../../../store';
import { Provider } from 'react-redux';
import App from '../../App';
import HomePage from '..';

describe('HomePage should work properly', () => {
  test('Add contact should redirect to /add-contact and display <form/>', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App>
          <HomePage />
        </App>
      </Provider>
    );
    fireEvent.click(getByTestId('add-contact-link'));
    expect(getByTestId('add-contact-form')).toBeInTheDocument();
  });
});
