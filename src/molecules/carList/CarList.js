import { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

//components
import Filters from '../filters';
import CarListItem from '../carListItem';
import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

//helpers
import { fetchCarList } from '../../actions/cars';
import { setFilters } from '../../actions/filters';
//reader
import carReader from '../../readers/car';

import useStyle from './carList.style';

const renderCarListItem = (carList) => {
  const carListCount = carList.length;
  return carListCount ? carList.map((car) => <CarListItem key={carReader.stockNumber(car)}car={car}/>) :  <> </>;
}

const CarList = (props) => {
    const {
        carList,
        page,
        totalCarsCount,
        fetchCarList,
        filterState,
        totalPageCount,
    } = props;

    useEffect(() => {
        fetchCarList(filterState);
    }, []); 

    const handlePageChange = useCallback((event, page) => {
        setFilters({page});
        fetchCarList(filterState)
    }, [fetchCarList, filterState]);
    
    const classes = useStyle();
    return (
    <Grid container className={classes.root}>
        <Grid item xs={12} md={4}><Filters /></Grid>
        <Grid item xs={12} md={8}>
            <h1>Available Cars</h1>
            <h3>Showing {10} of {totalCarsCount} results</h3>
            {renderCarListItem(carList)}
            <Pagination 
              page={page}
              showFirstButton
              showLastButton
              count={totalPageCount}
              onChange={handlePageChange}
            />
        </Grid>
    </Grid>)
}

const mapDispatchToProps = {
    fetchCarList,
    setFilters,
}

const mapStateToProps = (state) => ({
    carList: state.cars.carList,
    totalCarsCount: state.cars.totalCarsCount,
    totalPageCount: state.cars.totalPageCount,
    filterState: state.filters.filterState
})

export default connect(mapStateToProps, mapDispatchToProps)(CarList);