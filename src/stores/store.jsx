import Dispatcher from '../dispatcher/dispatcher';
import {EventEmitter} from 'events';
import {assign} from 'lodash';
import phonesData from '../assets/data/phones';
import brandsData from '../assets/data/brands';

let phones = phonesData;
let brands = brandsData;
let ascending = false;

let Store = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit('changed');
    },

    addChangeListener: function(callback) {
        this.on('changed', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('changed', callback);
    },

    getPhones: function() {
        return phones;
    },

    getBrands: function() {
        return brands;
    }
});

Dispatcher.register((action) => {
    switch (action.actionType) {
        case 'sort':
            phones = phones.sort((prev, cur) => {
                return ascending = !ascending ? prev.price - cur.price : cur.price - prev.price;
            });
            Store.emitChange();
            break;
        case 'filterByBrand':
            if (action.brand === 'all') {
                phones = phonesData;
            } else {
                phones = phonesData.filter((phone) => {
                    return phone.brand === action.brand;
                });
            }
            Store.emitChange();
            break;
    }
});

export default Store;