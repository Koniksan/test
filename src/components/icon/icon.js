import * as React from 'react';
import PropTypes from 'prop-types';
import { heart, heartRed, location, time } from './icon-list';

import './icon.scss';

export class Icon extends React.Component {

    render() {
        return <div
            onClick={this.props.onClick}
            className={`icon ${this.props.className || ''}`}>
            {this.renderIcon()}
        </div>
    }

    renderIcon() {
        const { iconName } = this.props;

        switch (iconName) {
            case 'heart': return heart;
            case 'heart-red': return heartRed;
            case 'location': return location;
            case 'time': return time;
        }
    }
}

Icon.propTypes = {
    iconName: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
}