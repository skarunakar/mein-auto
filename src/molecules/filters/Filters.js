
import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import {
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@material-ui/core';

import { fetchCarList } from '../../actions/cars';
import { fetchColors, fetchManufacturers, setFilters } from '../../actions/filters'

import useStyles from './filters.style';

const Filters = (props) => {
    const classes = useStyles();
    const {
        colors,
        manufacturers,
        filterState,
        setFilters,
        fetchCarList,
        fetchColors,
        fetchManufacturers,
    } = props;
    const { color, manufacturer } = filterState;
    const handleCarChange = (event) => {
      setFilters({color: event.target.value, page: 1});
    }
    const handleManufacturerChange = (event) => {
      setFilters({manufacturer: event.target.value, page:1});
    }
    useEffect(() => {
      fetchColors();
      fetchManufacturers();
    }, [fetchColors, fetchManufacturers]);

    const handleSubmit = useCallback((event) => {
      event.preventDefault();
      fetchCarList(filterState);
    },[fetchCarList, filterState])

    return(
    <form onSubmit={handleSubmit} className={classes.formContainer}>
        <div>Filter</div>
        <FormControl className={classes.formControl}>
          <InputLabel shrink={true}>Color</InputLabel>
          <Select
            displayEmpty
            value={color || ""}
            className={classes.select}
            onChange={handleCarChange}
          >
            <MenuItem value={""} className={classes.menuItem}>All car colors</MenuItem>
            {
              colors.map((color) => <MenuItem 
              key={color}
              value={color}
              className={classes.menuItem}
              >{color}</MenuItem>)
            }
          </Select>

        </FormControl>
        <FormControl className={classes.formControl}>
        <InputLabel shrink={true}>Manufacturer</InputLabel>
          <Select
            value={manufacturer || ""}
            displayEmpty
            className={classes.select}
            onChange={handleManufacturerChange}
          >
            <MenuItem value={""} className={classes.menuItem}>All manufacturers</MenuItem>
            {
              manufacturers.map((manufacturer) => 
              <MenuItem 
                key={manufacturer.name}
                value={manufacturer.name}
                className={classes.menuItem}
              >
                {manufacturer.name}
              </MenuItem>)
            }
          </Select>
        </FormControl>
        <Button className={classes.button} type="submit" variant="contained" color="primary">Filter</Button>
    </form>
    )
}

const mapDispatchToProps = {
    fetchColors,
    fetchManufacturers,
    fetchCarList,
    setFilters,
}

const mapStateToProps = (state) => ({
    colors: state.filters.colors,
    manufacturers: state.filters.manufacturers,
    filterState: state.filters.filterState
})


Filters.propTypes = {
  colors: PropTypes.array, 
  manufacturers: PropTypes.array, 
  fetchCarList: PropTypes.func,
  fetchColors: PropTypes.func,
  fetchManufacturers: PropTypes.func,
  filterState: PropTypes.object,
}

Filters.defaultProps = {
  colors: [],
  manufacturers: [],
  setFilters: _noop,
  fetchCarList: _noop,
  fetchColors: _noop,
  fetchManufacturers: _noop,
  filterState: {},
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);