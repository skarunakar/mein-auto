import PageNotFoundError from './PageNotFoundError';
import { cars } from '../../services/mock';

import { render } from '@testing-library/react';

import { HashRouter as Router } from 'react-router-dom';

//redux
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk]);

describe('PageNotFoundError Component', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
          filters: {
            filterState: {
                page: 1,
                sort: 'asc'
            },
          },
          cars: {
              carList: cars,
              totalCarsCount: 1000,
              totalPageCount: 10,
              isLoading: false,
          },
        });
      });
  
    function renderPageNotFoundComponent(props) {
      return render(
        <Provider store={store} >
           <PageNotFoundError
          {...props}
        />
        </Provider>,
        { wrapper: Router },
      );
    }
    test('renders 404 - Not found and link to home page', () => {
        const { queryByText } = renderPageNotFoundComponent();
        expect(queryByText('404 - Not Found')).not.toBeNull();
        expect(queryByText('Sorry, the page you are looking for does not exist')).not.toBeNull();
    });

});
