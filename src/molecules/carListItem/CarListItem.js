import {
    Card,
    CardContent,
    CardMedia,
    makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import getCarDetails from '../../utils/getCarDetails';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        maxWidth: '70rem',
        height: '10.9rem',
        padding: '1.2rem',
        margin: '0.8rem 0',
    },
    content: {
        padding: '0 2.4rem'
    },  
    itemTitle: {
        fontWeight: 700,
        fontSize: '3.2rem'
    },
    subTitle: {
        textTransform: 'capitalize',
    },
    img: {
        width: '10rem',
        height: '8rem',
    }
})

const CarListItem = (props) => {
    const classes = useStyles();
    const { car } = props;
    const {
        number,
        unit,
        fuelType,
        color,
        manufacturerName,
        modelName,
        pictureUrl,
        stockNumber,
    } = getCarDetails(car);

    return (<Card className={classes.root} variant="outlined">
        <CardMedia className={classes.img} image={pictureUrl}/>
        <CardContent className={classes.content}>
            <div className={classes.itemTitle}>{manufacturerName} {modelName}</div>
            <div  className={classes.subTitle}>Stock # {stockNumber} - {number} {unit} - {fuelType} - {color}</div>
            <RouterLink  to={`/car/${stockNumber}`}>View Details</RouterLink>
        </CardContent>
    </Card>)
}

CarListItem.propTypes = {
    car: PropTypes.object,
};

CarListItem.defaultProps = {
    car: {},
};

export default CarListItem;