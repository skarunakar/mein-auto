import CarList from './CarList';
import { cars } from '../../services/mock';

import { render, screen } from '@testing-library/react';

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
    const initialStore = {
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
    };
    beforeEach(() => {
        store = mockStore(initialStore);
      });
  
    function renderCarListComponent(props = {}, mockStore = store) {
      fetchCarList = jest.fn(() => Promise.resolve()).mockName('fetchCarList');
      setFilters = jest.fn(() => Promise.resolve()).mockName('setFilters');
      return render(
        <Provider store={mockStore} >
           <CarList
          fetchCarList={fetchCarList}
          setFilters={setFilters}
          {...props}
        />
        </Provider>,
        { wrapper: Router },
      );
    }
    test('renders loader while api fetch', () => {
        const storeValue = {
          ...initialStore,
          cars: {
            ...initialStore.cars,
            isLoading: true,
          }
        }
        const overrideStore = mockStore(storeValue);
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
    test('renders 2 CarListItem on page 1 for 3 cars', () => {
      const carList2 = cars.slice(0,12);
      const storeValue = {
        filters: {
          ...initialStore.filters,
          filterState: {
            ...initialStore.filters.filterState,
            page: 2
          }
        },
        cars: {
          ...initialStore.cars,
          carList: carList2,
          totalCarsCount: 13,
          totalPageCount: 2,
        }
      }
      const overrideStore = mockStore(storeValue);
      const { queryByText }  = renderCarListComponent(undefined, overrideStore);
      expect(queryByText(`Showing 3 of 13 results`)).not.toBeNull();
    });
});
