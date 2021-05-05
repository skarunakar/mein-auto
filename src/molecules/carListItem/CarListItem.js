import React from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    makeStyles,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'
import carReader from '../../readers/car';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        width: '78rem',
        height: '10.9rem',
        padding: '1.2rem',
        margin: '0.6rem',
    },
    content: {
        padding: 0
    },    
    img: {
        width: '10rem',
        height: '8rem',
    }
})

const CarListItem = (props) => {
    const classes = useStyles();
    const { car } = props;
    const stockNumber = carReader.stockNumber(car);
    const mileage = carReader.mileage(car);
    const fuelType = carReader.fuelType(car);
    const color = carReader.color(car);
    const manufacturerName = carReader.manufacturerName(car);
    const modelName = carReader.modelName(car);
    const pictureUrl = carReader.pictureUrl(car)

    return (<Card className={classes.root} variant="outlined">
        <CardMedia className={classes.img} image={pictureUrl}/>
        <CardContent className={classes.content}>
            <h1>{manufacturerName} {modelName}</h1>
            <h3>Stock {stockNumber} - {mileage}KM - {fuelType} - {color}</h3>
            <RouterLink  to={`/car/${stockNumber}`}>View Details</RouterLink>
        </CardContent>
    </Card>)
}

export default CarListItem;