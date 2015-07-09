import React from 'react';
import {filterByBrand} from '../actions/actions';

class PhonesBrands extends React.Component {
    _filter(brand) {
        filterByBrand(brand);
    }

    render() {
        let navigationButtonsList = [],
            self = this;

        this.props.brands.forEach((brand, i) => {
            navigationButtonsList.push(
                <button key={'btn' + i} className="mdl-button mdl-js-button mdl-js-ripple-effect"
                    onClick={this._filter.bind(self, brand)}>
                    {brand}
                </button>
            );
        });

        return <nav className="mdl-navigation">
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect"
                    onClick={this._filter.bind(this, 'all')}>
                All
            </button>
            {navigationButtonsList}
        </nav>;
    }
}

export default PhonesBrands;