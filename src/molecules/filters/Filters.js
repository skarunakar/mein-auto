
import React from 'react';
import { connect } from 'react-redux'; 
import {
    Button,
    Select,
    MenuItem
} from '@material-ui/core';
import { fetchColors, fetchManufacturers } from '../../actions/filters'
import { fetchCarList } from '../../actions/cars';

const handleSumbit = () => {}
const Filters = (props) => {
    const {
        colors,
        manufacturers,
    } = props;
    return(
    <form onSubmit={handleSumbit}>
        <Select>
          <MenuItem>All car colors</MenuItem>
          {
            colors.map((color) => <MenuItem>{color}</MenuItem>)
          }
        </Select>
        <Select>
        <MenuItem>All manufacturers</MenuItem>
        {
          manufacturers.map((manufacturer) => <MenuItem>{manufacturer}</MenuItem>)
        }
        </Select>
        <Button variant="contained" color="primary">Filter</Button>
    </form>
    )
}

const mapDispatchToProps = {
    fetchColors,
    fetchManufacturers,
    fetchCarList
}

const mapStateToProps = (state) => ({
    colors: state.filters.colors,
    manufacturers: state.filters.manufacturers,
})

export default connect(mapStateToProps, mapDispatchToProps)(Filters);