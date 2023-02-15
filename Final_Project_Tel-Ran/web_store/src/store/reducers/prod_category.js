const defaultState = [];

const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const SEARCH_PRICE = 'SEARCH_PRICE';

let first_state = [];

export const loadProductsByCategory = payload => ({ type: LOAD_PRODUCTS, payload });
export const sortProducts = payload => ({ type: SORT_PRODUCTS,payload });
export const searchProducts = payload => ({ type: SEARCH_PRICE, payload});

export const productsByCategoryReducer = ( state= defaultState, action ) => {
    if( action.type === LOAD_PRODUCTS ) {
        return first_state = action.payload
    } else if(action.type === SORT_PRODUCTS) {
        if(action.payload === 'default') {
            return first_state
        } else if (typeof state[0][action.payload] === 'string') {
            return [...state].sort(( a, b ) => a[action.payload].localeCompare(b[action.payload]))

            } else if (action.payload === 'price') {
            return [...state].sort((a, b) => {
                const discountedA = a.price * (1 - a.discont_price);
                const discountedB = b.price * (1 - b.discont_price);
                return discountedB - discountedA;
            });
        } else {
            return state
        }
    } else if (action.type === SEARCH_PRICE){
        const { min_value, max_value } = action.payload;
        return state.map(el => {
            if (el.price >= min_value && el.price <= max_value){
                el.hide_elem = false
            } else {
                el.hide_elem = true
            }
            return el
        })
    } else {
        return state
    }  
}