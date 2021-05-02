import React from 'react';
import {
    Switch,
    Route,
}from 'react-router-dom';

import CarList from '../molecules/carList';
import CarDetails from '../molecules/carDetails';
import PageNotFoundError from '../atoms/error';

class Routes extends React.Component {
  render() {
     return (
      <Switch>
        <Route exact path='/' component={CarList} />
        <Route exact path={`/cars/:stockNumber`} component={CarDetails} />
        <Route path='*' component={PageNotFoundError}/>
      </Switch>
    )
  }
}

export default Routes;