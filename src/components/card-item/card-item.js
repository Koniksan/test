import * as React from 'react';
import PropTypes from 'prop-types';

import './card-item.scss';
import { favoriteIcon, activeFavoriteIcon } from './icons';

export class CardItem extends React.Component {
    constructor() {
        super();

        this.state = { isFavorite: false };
    }

    render() {
        const { item } = this.props;
        const { isFavorite } = this.state;

        console.log(item);
        return (
            <li className='card-item'>
                <a className='card-item--link' target='_blank' href={item.ad_link}>
                    <div className='card-item--promo'>
                        <div className='card-item--img-stub' />
                        {item.images.length != 0 && this.renderItemImg(item.images)}
                        {isFavorite ? activeFavoriteIcon : favoriteIcon}
                    </div>
                </a>
            </li>
        );
    }

    renderItemImg(images) {
        return <div className='card-item--img' style={{ backgroundImage: `url(https://content.kufar.by/line_thumbs_2x/${images[0].id.substring(0, 2)}/${images[0].id}.jpg)` }} />;
    }
}

CardItem.propTypes = {
    item: PropTypes.object.isRequired,
};
