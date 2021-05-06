import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import _filter from 'lodash/filter';
import { connect } from 'react-redux';
import _noop from 'lodash/noop';

//components
import {
    Grid,
    Button,
    CardMedia,
    Container,
} from '@material-ui/core';

//helpers
import { isItemInFavoriteList } from './carDetails.helper';
import { fetchCarDetails } from '../../actions/cars';
import carReader from '../../readers/car';
import useStyles from './carDetails.style'

const handleUpdateFavorites = (action, stockNumber, setFavoriteItem) => () => {
    let favoriteList = JSON.parse(localStorage.getItem('favorites')) || [];
    const isActionSave = action === 'Save';
    if(isActionSave) {
        favoriteList.push(stockNumber)
    }
    else {
        favoriteList = _filter(favoriteList, stockNumber);
    }
    localStorage.setItem('favorites', JSON.stringify(favoriteList));
    setFavoriteItem(isActionSave);
}

const CarDetails = (props) => {
    const { stockNumber } = useParams();
    const favoriteList = JSON.parse(localStorage.getItem('favorites'));
    const [ isFavoriteItem, setFavoriteItem ] = useState(isItemInFavoriteList(favoriteList, stockNumber));
    const classes = useStyles();
    const { car, fetchCarDetails } = props;
    const mileage = carReader.mileage(car);
    const fuelType = carReader.fuelType(car);
    const color = carReader.color(car);
    const manufacturerName = carReader.manufacturerName(car);
    const modelName = carReader.modelName(car);
    const pictureUrl = carReader.pictureUrl(car);

    useEffect(() => {
        fetchCarDetails(stockNumber);
    }, []);

    return (<div>
        <div>
            <CardMedia  className={classes.img} image={pictureUrl}/>
        </div>
        <Container className={classes.detailsContainer}>
            <Grid item>
            <div className={classes.itemTitle}>{manufacturerName} {modelName}</div>
            <div className={classes.itemSubTitle}>Stock {stockNumber} - {mileage}KM - {fuelType} - {color}</div>
            <div className={classes.prodAvailability}>
                This car is currently available and can be delivered as soon as
                tomorrow morning. Please be aware that delivery times shown in
                this page are not definitive and may change due to bad weather
                conditions.
            </div>
            </Grid>
            <Grid item className={classes.saveContainer}>
                <div >If you like this car, click the button and save it in your
                  collection of favorite items.</div>
                <Button className={classes.button} onClick={handleUpdateFavorites(isFavoriteItem ? 'Remove' : 'Save', stockNumber, setFavoriteItem)}>
                  { isFavoriteItem ? 'Remove' : 'Save' }
                </Button>
            </Grid>
        </Container>
    </div>)

}

const mapDispatchToProps = {
    fetchCarDetails,
}

const mapStateToProps = (state) => ({
    car: state.cars.carDetails
})

CarDetails.propTypes = {
    car: PropTypes.array,
    fetchCarDetails: PropTypes.func,
};

CarDetails.defaultProps = {
    car: [],
    fetchCarDetails: _noop,
};
export default connect(mapStateToProps, mapDispatchToProps)(CarDetails);