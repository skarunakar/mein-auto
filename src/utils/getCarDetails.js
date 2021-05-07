import carReader from '../readers/car';
import mileageReader from '../readers/mileage';

function getCarDetails (car) {
    const mileage = carReader.mileage(car);
    const number = mileageReader.number(mileage); 
    const unit = mileageReader.unit(mileage);
    const fuelType = carReader.fuelType(car);
    const color = carReader.color(car);
    const manufacturerName = carReader.manufacturerName(car);
    const modelName = carReader.modelName(car);
    const pictureUrl = carReader.pictureUrl(car);
    const stockNumber = carReader.stockNumber(car);
    return {
        number,
        unit,
        fuelType,
        color,
        manufacturerName,
        modelName,
        pictureUrl,
        stockNumber,
    }
}

export default getCarDetails;