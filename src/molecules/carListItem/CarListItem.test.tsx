import CarListItem from './CarListItem';

import { render, screen } from '@testing-library/react';

import { HashRouter as Router } from 'react-router-dom';


describe('CarListItem Component', () => {
  
    function renderCarListItemComponent() {
      const car = {
        "stockNumber": 64590,
        "manufacturerName": "Fiat",
        "modelName": "Scudo",
        "color": "white",
        "mileage": {
          "number": 101307,
          "unit": "km"
        },
        "fuelType": "Petrol",
        "pictureUrl": "https://auto1-js-task-api--mufasa71.repl.co/images/car.svg"
      }
      return render(
        <CarListItem
          car={car}
        />,
        { wrapper: Router },
      );
    }
    test('renders cars summary inside Card', () => {
        const { queryByText } = renderCarListItemComponent();
        expect(queryByText('Fiat Scudo')).not.toBeNull();
        const title = screen.getByText(/Fiat Scudo/i);
        const subTitle = screen.getByText(/Stock # 64590 - 101307 km - Petrol - White/i);
        expect(title).toBeInTheDocument();
        expect(subTitle).toBeInTheDocument();
    });
});
