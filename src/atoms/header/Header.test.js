import Header from './Header';
import { cars } from '../../services/mock';

import { render } from '@testing-library/react';

import { HashRouter as Router } from 'react-router-dom';

//redux
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk]);

describe('Header Component', () => {
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
  
    function renderHeaderComponent() {
      return render(
        <Provider store={store} >
           <Header/>
        </Provider>,
        { wrapper: Router },
      );
    }
    test('renders four redirection Links', () => {
        const { container } = renderHeaderComponent();
        expect(container.querySelectorAll('a')).toHaveLength(4);
    });

});
