import {
    Switch,
    Route,
}from 'react-router-dom';

import CarList from '../molecules/carList';
import CarDetails from '../molecules/carDetails';
import PageNotFoundError from '../atoms/error';

function Routes () {
  return (
    <Switch>
        <Route exact path='/' component={CarList}/>
        <Route exact path={`/car/:stockNumber`} component={CarDetails} />
        <Route path='*'>
          <PageNotFoundError />
        </Route>
    </Switch>
    )
}

export default Routes;