import {
    LOAD_PARTS,
    UPDATE_SORT,
    SORT_PARTS,
    UPDATE_FILTERS,
    FILTER_PARTS,
    CLEAR_FILTERS
} from '../actions'

const filter_reducer = (state, action) => {

    // Initial Parts Loading
    if(action.type === LOAD_PARTS){
        // get prices when parts load
        let maxPrice = action.payload.map((prop) => prop.price)
        // get maxPrice
        maxPrice = Math.max(...maxPrice)

        return {
            ...state,
            all_parts: [...action.payload],
            filtered_parts: [...action.payload],
            filters: {...state.filters, max_price: maxPrice, price: maxPrice}
        }
    }

    // UPDATE Sort
    // before sorting
    if(action.type === UPDATE_SORT){
        return {
            ...state,
            sort: action.payload
        }
    }

    // SORT By PRICE
    if(action.type === SORT_PARTS){
        const {sort, filtered_parts} = state
        // if nothing is sorted
        let tempParts = [...filtered_parts]
        if(sort === 'price-lowest'){
            tempParts = tempParts.sort((a, b) => a.price - b.price)
        }
        if(sort === 'price-highest'){
            tempParts = tempParts.sort((a, b) => b.price - a.price)
        }
        return {...state, filtered_parts: tempParts}
    }

    // UPDATE FILTERS
    if(action.type === UPDATE_FILTERS){
        const {name, value} = action.payload
        return {...state, filters: {...state.filters, [name]:value}}
    }

    // FILTER PRODUCTS
    if(action.type === FILTER_PARTS){
        const {all_parts} = state 
        const {price, mfg} = state.filters
        // fresh copy of the state
        let tempParts = [...all_parts]

        // mfg 
        if(mfg !== 'all'){
            tempParts = 
            tempParts.filter((banana) => banana.mfg === mfg)
        }

        // price 
        tempParts = tempParts.filter((banana) => banana.price <= price)

        return {
            ...state,
            filtered_parts: tempParts
        }

    }

    // CLEAR FILTERS
    if(action.type === CLEAR_FILTERS){
        return {
            ...state,
            filters: {
                ...state.filters,
                price: state.filters.max_price,
                mfg: 'all'
            }
        }
    }

    throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer