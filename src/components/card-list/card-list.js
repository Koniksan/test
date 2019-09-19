import * as React from 'react';
import PropTypes from 'prop-types';

import './card-list.scss'

export class CardList extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return this.renderList();
    }

    renderList() {
        const { items } = this.props;

        console.log(items)

        return (
            <ul className="card-list">
                {items.map(this.renderListItem)}
            </ul>
        )
    }

    renderListItem = (item, index) => {
        return (
            <li className="card-list--item" key={item.ad_id}>
                <a className="card-list--link" target="_blank" href={item.ad_link}>
                    {item.subject}
                </a>
            </li>
        )
    }
}

CardList.propTypes = {
    items: PropTypes.array.isRequired
}