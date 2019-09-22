import * as React from 'react';
import PropTypes from 'prop-types';
import { CardItem } from '../card-item/card-item';

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

        return <ul className="card-list">{items.map(x => <CardItem item={x} key={x.ad_id} /> )}</ul>
    }
}

CardList.propTypes = {
    items: PropTypes.array.isRequired
}