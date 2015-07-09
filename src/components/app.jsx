import React from 'react';
import Store from '../stores/store';
import {sort} from '../actions/actions';
import PhonesBrands from './phonesBrands';
import PhonesList from './phonesList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phones: Store.getPhones(),
            brands: Store.getBrands()
        };
    }

    _onChange() {
        this.setState({
            phones: Store.getPhones()
        });
    }

    componentDidMount() {
        Store.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        Store.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer
            mdl-layout--overlay-drawer-button">
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">Phones</span>
                <PhonesBrands
                    brands = {this.state.brands}
                />
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect"
                        onClick={sort}>
                    Sort by price
                </button>
            </div>
            <main className="mdl-layout__content">
                <div className="page-content">
                <PhonesList
                    phones = {this.state.phones}
                />
                </div>
            </main>
        </div>
        );
    }
}

export default App;