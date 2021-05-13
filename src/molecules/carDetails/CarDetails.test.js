import CarDetails from './CarDetails';
import { cars } from '../../services/mock';

import { render, fireEvent, screen } from '@testing-library/react';

import { HashRouter as Router } from 'react-router-dom';

//redux
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const mockStore = configureStore([thunk]);

jest.mock('react-router-dom', () => {
    const mockedUseParams = () => ({
        stockNumber: '64590'
    })
    return {
        useParams: mockedUseParams
    }
})

describe('CarDetails Component', () => {
    let store;
    beforeEach(() => {
        store = mockStore({
            cars: {
                carDetails: cars[0]
            }
        });
      });
  
    function renderCarDetailsComponent(props = {}) {
      return render(
        <Provider store={store} >
           <CarDetails
          {...props}
        />
        </Provider>,
        { wrapper: Router },
      );
    }
    test('renders car details', () => {
        const { queryByText } = renderCarDetailsComponent();
        expect(queryByText(`Fiat Scudo`)).toBeInTheDocument();
    });
        test('toggles to remove button if car added as favorite', () => {
        const { queryByText } = renderCarDetailsComponent();
        const button = screen.getByTestId('add-to-favorites');
        fireEvent.click(button);
        expect(queryByText(`Remove`)).toBeInTheDocument();
        fireEvent.click(button);
    });
    test('shows Save button if car not  part of favorite list', () => {
        const { queryByText } = renderCarDetailsComponent();
        expect(queryByText(`Save`)).toBeInTheDocument();
    });
    test('shows Remove button if car is  part of favorite list', () => {
        JSON.parse = jest.fn(() => {
            return ['64590']
        });
        const { queryByText } = renderCarDetailsComponent();
        expect(queryByText(`Remove`)).toBeInTheDocument();
    });
});
