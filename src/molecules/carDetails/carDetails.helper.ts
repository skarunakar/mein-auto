import _some from 'lodash/some';
export function isItemInFavoriteList (favorites: Array<string>, stockNumber: string) { return _some(favorites, (ele) => ele === stockNumber );} 