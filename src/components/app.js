import * as React from 'react';
import { CardList } from './card-list/card-list';
import { View } from './view/view';
import { connect } from 'react-redux';
import { loadAds } from '../actions';

class App extends React.Component {
    constructor() {
        super();
        this.state = { items: null };
    }

    componentDidMount() {
        this.props.loadAds();
    }

    render() {
        const { ads, isLoading, error } = this.props;

        return (
            <View isLoaded={!isLoading} >
                {ads.length != 0 && <CardList items={ads} />}
                {error && error}
            </View>
        )
    }
}

const mapStateToProps = ({ isLoading, ads, error }) => ({
    isLoading,
    ads,
    error
});

const mapDispatchToProps = dispatch => ({
    loadAds: () => dispatch(loadAds())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);