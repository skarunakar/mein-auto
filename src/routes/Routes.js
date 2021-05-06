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
        <Route exact path='/mein-auto' component={CarList}/>
        <Route exact path={`/mein-auto/car/:stockNumber`} component={CarDetails} />
        <Route path='*' component={PageNotFoundError}/>
    </Switch>
    )
}

export default Routes;