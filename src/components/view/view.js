import * as React from 'react';
import PropTypes from 'prop-types';
import { Preloader } from '../preloader/preloader';

import './view.scss';

export class View extends React.Component {
    
    render() {
        return (
            <div className="view">
                {
                    this.props.isLoaded
                        ? this.props.children
                        : <Preloader />
                }
            </div>
        )
    }
}

View.propTypes = {
    isLoaded: PropTypes.bool.isRequired
}