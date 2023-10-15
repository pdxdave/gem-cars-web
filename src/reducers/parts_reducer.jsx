import {
    GET_PARTS_BEGIN,
    GET_PARTS_SUCCESS,
    GET_PARTS_ERROR
} from '../actions'

const parts_reducer = (state, action) => {

    if(action.type === GET_PARTS_BEGIN) {
        return {
            ...state,
            parts_loading: true
        }
    }
    if(action.type === GET_PARTS_SUCCESS){
        return {
            ...state,
            parts_loading: false,
            parts: action.payload
        }
    }
    if(action.type === GET_PARTS_ERROR){
        return {
            ...state,
            parts_error: true,
            parts_loading: false
        }
    }

    throw new Error(`No Matching "${action.type}" - action type`)
}

export default parts_reducer;