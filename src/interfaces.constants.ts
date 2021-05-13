
export interface FilterState {
    color: string,
    manufacturer: string,
    sort: string,
    page: number,
}

export interface Mileage {
    unit: string,
    number: Number,
}

export interface Car  {
    color: string,
    fuelType: string,
    mileage: Mileage,
    manufacturerName: string,
    modelName: string,
    pictureUrl: string,
    stockNumber: string,
}

export interface CarDetailsInterface {
    car: Object,
    fetchCarDetails: (stockNumber: string) => void
}


export interface carListReader {
    filterState: FilterState,
}