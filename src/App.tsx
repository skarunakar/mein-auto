import React from 'react';
import {connect } from 'react-redux';

//components
import Routes from './routes';
import Grid from '@material-ui/core/Grid';
import Header from './atoms/header';
import Footer from './atoms/footer';

//redux
import { fetchMetadata } from './actions/metadata';

import style from './app.module.scss';

interface Props {
  fetchMetadata: Function,
}

class App extends React.Component <Props> {
  public static defaultProps = {
    
  }
  componentDidMount(){
    const { fetchMetadata } = this.props;
    fetchMetadata();
  }

  render() {
    return (
        <div>
          <Header />
          <Footer />
        </div>
    );
  }
}

const mapDispatchToProps = {
  fetchMetadata,
}

export default connect<null, Object>(null, mapDispatchToProps)(App);