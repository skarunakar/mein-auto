import _some from 'lodash/some';
export function isItemInFavoriteList (favorites, stockNumber) { return _some(favorites, (ele) => ele === stockNumber );} 