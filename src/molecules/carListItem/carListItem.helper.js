import _some from 'lodash/some';
export const isItemInFavoriteList  = (favorites, stockNumber) => _some(favorites, stockNumber);