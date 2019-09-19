import * as React from 'react';
import { CardList } from './card-list/card-list';
import { View } from './view/view';

export class App extends React.Component {
    constructor() {
        super();
        this.state = { items: null };
    }

    componentDidMount() {
        fetch('https://cre-api.kufar.by/ads-search/v1/engine/v1/search/rendered-paginated?size=42&sort=lst.d&cur=BYR&cat=5070&rgn=7&lang=ru')
            .then(res => res.json()).then(data => {
                this.setState({ items: data.ads })
            })
    }

    render() {
        const { items } = this.state;
        return (
            <View isLoaded={!!items} >
                {items && <CardList items={items} />}
            </View>
        )
    }

}