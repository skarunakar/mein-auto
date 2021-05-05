export function getCarListQueryString(filterState) {
    const {
        color,
        manufacturer,
        sort,
        page,
    } = filterState;
    return `color=${color}&manufacturer=${manufacturer}&sort=${sort}&page=${page}`;
}