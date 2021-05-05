
import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux'; 
import {
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from '@material-ui/core';

import { fetchCarList } from '../../actions/cars';
import { fetchColors, fetchManufacturers, setFilters } from '../../actions/filters'

import style from './filters.module.scss';
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
      setFilters({color: event.target.value});
    }
    const handleManufacturerChange = (event) => {
      setFilters({manufacturer: event.target.value});
    }
    useEffect(() => {
      fetchColors();
      fetchManufacturers();
    }, []);

    const handleSubmit = useCallback(() => {
      fetchCarList(filterState);
    },[fetchCarList, filterState])

    return(
    <form onSubmit={handleSubmit} className={style.formContainer}>
        <FormControl className={classes.formControl}>
          <InputLabel shrink={true}>Color</InputLabel>
          <Select
            displayEmpty
            value={color || ""}
            className={classes.select}
            onChange={handleCarChange}
          >
            <MenuItem value={""}>All car colors</MenuItem>
            {
              colors.map((color) => <MenuItem 
              key={color}
              value={color}
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
            <MenuItem value={""}>All manufacturers</MenuItem>
            {
              manufacturers.map((manufacturer) => 
              <MenuItem key={manufacturer.name} value={manufacturer.name}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Filters);