import React, {useContext, useReducer} from 'react'
import reducer from '../reducers/nav_reducer'
import {
    MOBILE_OPEN,
    MOBILE_CLOSE
} from '../actions'

const initialState = {
    isMobileOpen: false
}

const MobileContext = React.createContext()

export const MobileProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const openMobile = () => {
        dispatch({ type: MOBILE_OPEN})
    }

    const closeMobile = () => {
        dispatch({ type: MOBILE_CLOSE})
    }

    return (
        <MobileContext.Provider value={{
            ...state,
            openMobile,
            closeMobile
        }}>
            {children}
        </MobileContext.Provider>
    )
}

export const useMobileContext = () => {
    return useContext(MobileContext)
}