import React, {useContext, useEffect, useReducer} from 'react'
import {parts_url as url} from '../utilities/misc'
import axios from 'axios'
import {
    GET_PARTS_BEGIN,
    GET_PARTS_SUCCESS,
    GET_PARTS_ERROR,
    GET_SINGLE_PART_BEGIN,
    GET_SINGLE_PART_SUCCESS,
    GET_SINGLE_PART_ERROR
} from '../actions'

import reducer from '../reducers/parts_reducer'


const initialState = {
    parts_loading: false,
    parts_error: false,
    parts: [],

    single_part_loading: false,
    single_part_error: false,
    single_property: []
}

const PartsContext = React.createContext()

export const PartsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // GET ALL PARTS
    const fetchParts = async (url) => {
        dispatch({ type: GET_PARTS_BEGIN })
        try {
            const response = await axios.get(url)
            const parts = response.data
            
            dispatch({ type: GET_PARTS_SUCCESS, payload: parts})
        } catch (error) {
            dispatch({ type: GET_PARTS_ERROR})
        }
    }

    useEffect(() => {
        fetchParts(url)
    }, [])


    // GET SINGLE PART
    const fetchSinglePart = async (url) => {
        dispatch({ type: GET_SINGLE_PART_BEGIN})
        try {
            const response = await axios.get(url)
            const singlePart = response.data
            dispatch({ type: GET_SINGLE_PART_SUCCESS, payload: singlePart})
        } catch (error) {
            dispatch({ type: GET_SINGLE_PART_ERROR})
        }
    }

    return (
        <PartsContext.Provider value={{
            ...state,
            fetchSinglePart
        }}>
            {children}
        </PartsContext.Provider>
    )
}

export const usePartsContext = () => {
        return useContext(PartsContext)
    }