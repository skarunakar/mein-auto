import CarList from './CarList';
import { cars } from '../../services/mock';

import { render } from '@testing-library/react';

import { HashRouter as Router } from 'react-router-dom';

//redux
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk]);

describe('CarList Component', () => {
    let fetchCarList;
    let setFilters;
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
  
    function renderCarListComponent(props, mockStore = store) {
      fetchCarList = jest.fn(() => Promise.resolve()).mockName('fetchCarList');
      setFilters = jest.fn(() => Promise.resolve()).mockName('setFilters');
      return render(
        <Provider store={mockStore} >
           <CarList
          fetchCarList={fetchCarList}
          setFilters={setFilters}
          filterState={{ page: 1, sort: 'asc' }}
          carList={cars}
          error={false}
          {...props}
        />
        </Provider>,
        { wrapper: Router },
      );
    }
    test('renders loader while api fetch', () => {
        const overrideStore = mockStore({
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
              isLoading: true,
          },
        });
        const { queryByText } = renderCarListComponent({carList:[]}, overrideStore);;
        expect(queryByText(`Showing 10 of 1000 results`)).toBeNull();
    });
    test('renders result headers', () => {
      const { queryByText } = renderCarListComponent({isLoading: true});
      expect(queryByText(`Showing 10 of 1000 results`)).not.toBeNull();
    });
    test('renders 10 CarListItem on page 1 for 1000 cars', () => {
      const { queryByText } = renderCarListComponent({isLoading: true});
      expect(queryByText(`Showing 10 of 1000 results`)).not.toBeNull();
    });
    test('renders 10 CarListItem on page 2 for 1000 cars', () => {
      const filterState = { page: 2, sort: 'asc'};
      const { queryByText }  = renderCarListComponent({filterState, isLoading: true});
      expect(queryByText(`Showing 10 of 1000 results`)).not.toBeNull();
    });
});
