import Filters from './Filters';
import { colors, manufacturers } from '../../services/mock';

import { render, screen, fireEvent } from '@testing-library/react';
//redux
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk]);

describe('Filters Component', () => {
    let fetchColors;
    let fetchCarList;
    let setFilters;
    let fetchManufacturers;
    let store;
    beforeEach(() => {
        store = mockStore({
          filters: {
            colors,
            manufacturers,
            filterState: {
                page: 1,
                sort: 'asc'
            },
          }
        });
      });
  
    function renderFilterComponent(props) {
      fetchColors = jest.fn(() => Promise.resolve()).mockName('fetchColors');
      fetchManufacturers = jest.fn(() => Promise.resolve()).mockName('fetchManufacturers');
      fetchCarList = jest.fn(() => Promise.resolve()).mockName('fetchCarList');
      setFilters = jest.fn(() => Promise.resolve()).mockName('setFilters');
      return render(
        <Provider store={store} >
           <Filters
          fetchCarList={fetchCarList}
          fetchColors={fetchColors}
          fetchManufacturers={fetchManufacturers}
          setFilters={setFilters}
          filterState={{ page: 1, sort: 'asc' }}
          {...props}
        />
            
        </Provider>
      );
    }
    test('should display All car colors as default color filter value', () => {
        renderFilterComponent();
        const selectedFilterValue = screen.getByText(/All car colors/i);
        expect(selectedFilterValue).toBeInTheDocument();
    });
    test('should display All manufacturers as default manufacturer filter value', () => {
        renderFilterComponent();
        const selectedFilterValue = screen.getByText(/All manufacturers/i);
        expect(selectedFilterValue).toBeInTheDocument();
    });
    test('should invoke fetchCarList only when submit of filter', () => {
        const { getByTestId } = renderFilterComponent();
        const button = getByTestId('filter-button')
        fireEvent.click(button, { preventDefault: () => {}})
    });
    test('should update color in filterState on color filter change', () => {
        const { getByTestId }  = renderFilterComponent();
        const select = getByTestId("car-filter-select");
        select.value = 'Green';
    });
    // test('should update manufacturer in filterState on color filter change', () => {
    //     renderFilterComponent();
    //     const select = container.querySelector('#manufacturer-filter-select')
    //     fireEvent.change(select, { target: { value: 'Audi'}})
    //     const selectedFilterValue = screen.getByText(/Audi/i);
    //     expect(selectedFilterValue).toBeInTheDocument();
    // });
});
