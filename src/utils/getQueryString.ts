import { FilterState } from '../interfaces.constants'
export function getCarListQueryString(filterState: FilterState) {
    const {
        color,
        manufacturer,
        sort,
        page,
    } = filterState;
    return `color=${color}&manufacturer=${manufacturer}&sort=${sort}&page=${page}`;
}