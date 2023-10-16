import React, {useEffect, useContext, useReducer} from 'react'
import reducer from '../reducers/filter_reducer'

import {
    LOAD_PARTS,
    UPDATE_SORT,
    SORT_PARTS,
    UPDATE_FILTERS,
    FILTER_PARTS,
    CLEAR_FILTERS
} from '../actions'

import {usePartsContext} from './parts_context'

const initialState = {
    filtered_parts: [],
    all_parts: [],
    sort: 'price-lowest',
    filters: {
        min_price: 0,
        max_price: 0,
        price: 0,
        mfg: "all",
        part_type: "all"
    }
}

const FilterContext = React.createContext()

export const FilterProvider = ({children}) => {
    const {parts} = usePartsContext()
    const [state, dispatch] = useReducer(reducer, initialState)

    // INITIAL PARTS LOADING
    useEffect(() => {
        dispatch({ type: LOAD_PARTS, payload: parts})
    }, [parts])

    // Need for sorting
    useEffect(() => {
        dispatch({ type: FILTER_PARTS})
        dispatch({ type: SORT_PARTS })
    }, [parts, state.sort, state.filters])


    // SORT BY PRICE
    const updateSort = (e) => {
        const value = e.target.value 
        dispatch({ type: UPDATE_SORT, payload: value})
    }

    // FILTERS
    const updateFilters = (e) => {
        let name = e.target.name
        let value = e.target.value 

        if(name === 'mfg'){
            value = e.target.textContent
        }
        if(name === 'price'){
            value = Number(value)
        }

      // CLEAR  
      dispatch({ type: UPDATE_FILTERS, payload: {name, value}})
    }

    const clearFilters = () => {
        dispatch({ type: CLEAR_FILTERS })
    }

    return (
        <FilterContext.Provider value={{
            ...state,
            updateSort,
            updateFilters,
            clearFilters
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}