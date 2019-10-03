import * as React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../icon/icon';

import './card-item.scss';

export class CardItem extends React.Component {
    constructor() {
        super();

        this.state = { isFavorite: false };
    }

    render() {
        const { item } = this.props;
        const { isFavorite } = this.state;
        const iconName = isFavorite ? 'heart-red' : 'heart';

        return (
            <li className='card-item'>
                <a className='card-item--link' target='_blank' href={item.ad_link}>
                    <div className='card-item--left'>
                        <div className='card-item--img-stub' />
                        {item.images.length != 0 && this.renderItemImg(item.images)}
                        <Icon
                            className='card-item--icon-favorite'
                            iconName={iconName}
                            onClick={this.handleOnFavoriteClick} />
                    </div>
                    <div className='card-item--right'>
                        <h2 className='card-item--title'>{item.subject}</h2>
                        <h3 className='card-item--category'>{item.ad_parameters[0].vl}</h3>
                        <div className='card-item--bottom'>
                            <div className='card-item--price'>{this.renderPrice(item)}</div>
                            <div className="card-item--bottom-right">
                                <div className='card-item--location'>
                                    <Icon iconName="location" className="card-item--location-icon"/>
                                    {item.ad_parameters[1].vl}, {item.ad_parameters[2].vl}
                                </div>
                                <div className='card-item--time'>
                                    <Icon iconName="time" className="card-item--time-icon" />
                                    {this.renderTime(item.list_time)}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </li>
        );
    }

    renderTime(timeStr) {
        const postDate = new Date(timeStr);
        const day = this.getDay(postDate);

        return `${day}, ${postDate.getHours()}:${postDate.getMinutes()}`
    }

    getDay(postDate) {
        const currentDate = new Date();

        switch (postDate.getDay()) {
            case currentDate.getDay(): return 'Сегодня';
            case currentDate.getDay() - 1: return 'Вчера';
            default: return `${postDate.getDate()}.${postDate.getMonth() + 1}.${postDate.getFullYear()}`
        }
    }

    renderPrice(item) {
        switch (item.currency) {
            case 'BYR': return this.renderPriceValue(item.price_byn, 'р.');
            case 'USD': return this.renderPriceValue(item.price_usd, '$');
        }
    }

    renderPriceValue(priceStr, currency) {
        return priceStr != "0"
            ? `${priceStr.substring(0, priceStr.length - 2)} ${currency}`
            : 'Договорная';
    }

    renderItemImg(images) {
        return <div
            className='card-item--img'
            style={{ backgroundImage: `url(https://content.kufar.by/line_thumbs_2x/${images[0].id.substring(0, 2)}/${images[0].id}.jpg)` }} />;
    }

    handleOnFavoriteClick = e => {
        e.preventDefault();
        this.setState({ isFavorite: !this.state.isFavorite });
    };
}

CardItem.propTypes = {
    item: PropTypes.object.isRequired,
};
