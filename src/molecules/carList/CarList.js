import React from 'react';
import { connect } from 'react-redux';

//components
import Filters from '../filters';
import CarListItem from '../carListItem';
import { Pagination } from '@material-ui/lab';

const handlePageChange = () => {

};

const CarList = (props) => {
    const {
        carList,
        page,
        totalPageCount
    } = props;
    return (<div>
        <Filters />
        <div>
            <h1>Available Cars</h1>
            <h3>Showing {page} of {totalPageCount} </h3>
            <Pagination 
              page={page}
              showFirstButton
              showLastButton
              onChange={handlePageChange}
            />

        </div>
    </div>)
}

const mapStateToProps = (state) => ({
    carList: state.cars.carList,
    page: state.cars.page
})

export default connect(mapStateToProps, undefined)(CarList);