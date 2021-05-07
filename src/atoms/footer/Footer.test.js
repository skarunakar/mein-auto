import Footer from './Footer';
import { cars } from '../../services/mock';

import { render } from '@testing-library/react';

import { HashRouter as Router } from 'react-router-dom';

//redux
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk]);

describe('Footer Component', () => {
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
  
    function renderFooterComponent() {
      return render(
        <Provider store={store} >
           <Footer/>
        </Provider>,
        { wrapper: Router },
      );
    }
    test('renders © Auto1 Group 2018', () => {
        const { queryByText } = renderFooterComponent();
        expect(queryByText('© Auto1 Group 2018')).not.toBeNull();
    });
});
