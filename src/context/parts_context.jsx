import axios from 'axios'
import React, {useContext, useEffect, useReducer} from 'react'
import {
    GET_PARTS_BEGIN,
    GET_PARTS_SUCCESS,
    GET_PARTS_ERROR
} from '../actions'
import reducer from '../reducers/parts_reducer'
import {parts_url as url} from '../utilities/misc'

const initialState = {
    parts_loading: false,
    parts_error: false,
    parts: [],
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
            console.log(parts)
            dispatch({ type: GET_PARTS_SUCCESS, payload: parts})
        } catch (error) {
            dispatch({ type: GET_PARTS_ERROR})
        }
    }

    useEffect(() => {
        fetchParts(url)
    }, [])

    return (
        <PartsContext.Provider value={{
            ...state
        }}>
            {children}
        </PartsContext.Provider>
    )
}

export const usePartsContext = () => {
        return useContext(PartsContext)
    }