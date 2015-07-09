import Dispatcher from '../dispatcher/dispatcher';

let Actions = {
    sort: () => {
        Dispatcher.dispatch({
            actionType: 'sort'
        });
    },

    filterByBrand: (brand) => {
        Dispatcher.dispatch({
            actionType: 'filterByBrand',
            brand: brand
        });
    }
};



export default Actions;