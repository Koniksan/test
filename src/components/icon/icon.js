import * as React from 'react';
import PropTypes from 'prop-types';
import { heart, heartRed } from './icon-list';

export class Icon extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div
            onClick={this.props.onClick}
            className={`icon ${this.props.className}`}>
            {this.renderIcon()}
        </div>
    }

    renderIcon() {
        const { iconName } = this.props;

        switch (iconName) {
            case 'heart': return heart;
            case 'heart-red': return heartRed;
        }
    }
}

Icon.propTypes = {
    iconName: PropTypes.string,
    onClick: PropTypes.func
}