import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _noop from 'lodash/noop';

//components
import Filters from '../filters/Filters';
import CarListItem from '../carListItem';
import { Grid, Container, LinearProgress } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

//helpers
import { fetchCarList } from '../../actions/cars';
import { setFilters } from '../../actions/filters';
//reader
import carReader from '../../readers/car';

import useStyle from './carList.style';
import { CarDetails } from '../../interfaces.constants';

const renderCarListItem = (carList) => carList.map((car: CarDetails) => <CarListItem key={carReader.stockNumber(car)}car={car}/>)

const CarList = (props) => {
    const {
        carList,
        totalCarsCount,
        fetchCarList,
        filterState,
        totalPageCount,
        setFilters,
        isLoading
    } = props;
    const { page } = filterState;
    useEffect(() => {
        fetchCarList(filterState);
    }, [page]); 

    const handlePageChange = useCallback((event, page) => {
        setFilters({page});
    }, [filterState]);
    
    const classes = useStyle();
    return (
        <Container className={classes.root}>
          <Grid container>
          <Grid item xs={12} md={4}><Filters /></Grid>
          <Grid item xs={12} md={8} className={classes.gridItem}>
            {
              isLoading ? <LinearProgress /> : 
              <><div className={classes.listHeader}>Available Cars</div>
              <div>{`Showing ${ page !== totalPageCount ? 10 : totalCarsCount - ((page-1) * 10 ) } of ${totalCarsCount} results`}</div>
              {renderCarListItem(carList)}
              <Pagination 
                page={page}
                showFirstButton
                showLastButton
                count={totalPageCount}
                className={classes.paginationContainer}
                onChange={handlePageChange}
              /></>
            }
           </Grid>
          </Grid>
        </Container>)
}

const mapDispatchToProps = {
    fetchCarList,
    setFilters,
}

const mapStateToProps = (state) => ({
    carList: state.cars.carList,
    totalCarsCount: state.cars.totalCarsCount,
    totalPageCount: state.cars.totalPageCount,
    isLoading: state.cars.isLoading,
    filterState: state.filters.filterState
});

CarList.propTypes = {
  carList: PropTypes.array, 
  fetchCarList: PropTypes.func,
  setFilters: PropTypes.func,
  filterState: PropTypes.object,
  totalCarsCount: PropTypes.number,
  totalPageCount: PropTypes.number,
  isLoading: PropTypes.bool,

}

CarList.defaultProps = {
  carList: [],
  setFilters: _noop,
  fetchCarList: _noop,
  filterState: {},
  totalCarsCount: undefined,
  totalPageCount: undefined,
}

export default connect(mapStateToProps, mapDispatchToProps)(CarList);