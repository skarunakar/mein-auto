import CarList from './CarList';
import { cars, colors, manufactuers } from '../../services/mock';

import { render } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

//redux
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk]);

describe('CarList Component', () => {
    let fetchCarList;
    let setFilters;
    let context;
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
              carList: cars
          },
        });
      });
  
    function renderCarListComponent(props) {
      fetchCarList = jest.fn(() => Promise.resolve()).mockName('fetchCarList');
      setFilters = jest.fn(() => Promise.resolve()).mockName('setFilters');
      jest.mock('../filters/Filters', () => {
        const FakeCSSTransition = jest.fn(() => null)
        console.log('called here')
        return FakeCSSTransition;
    })
      return render(
        <Provider store={store} >
           <CarList
          fetchCarList={fetchCarList}
          setFilters={setFilters}
          filterState={{ page: 1, sort: 'asc' }}
          carList={cars}
          loading={false}
          error={false}
          totalCarsCount={1000}
          totalPageCount={10}
          {...props}
        />
            
        </Provider>,
        { wrapper: Router },
      );
    }
    test('renders loader while api fetch', () => {
        renderCarListComponent();
    });
    test('renders list while api fetch', () => {
        renderCarListComponent();

    });
});
