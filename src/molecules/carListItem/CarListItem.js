import React from 'react';
import {
    Button
} from '@material-ui/core';

import { isItemInFavoriteList } from './carListItem.helper';

const CarListItem = (props) => {
    const favoriteList = localStorage.getItem('favorites');
    const isFavoriteItem = isItemInFavoriteList(favoriteList);

    return (<div>
        <div>
            <img />
        </div>
        <div>
            <div></div>
            <div>
                <Button onClick={}>
                  { isFavoriteItem ? Save : Remove }
                </Button>
            </div>
        </div>
    </div>)
}

export default CarListItem;