import {
    GET_PARTS_BEGIN,
    GET_PARTS_SUCCESS,
    GET_PARTS_ERROR,
    GET_SINGLE_PART_BEGIN,
    GET_SINGLE_PART_SUCCESS,
    GET_SINGLE_PART_ERROR
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

    // GET SINGLE PART
    if(action.type === GET_SINGLE_PART_BEGIN){
        return {
            ...state,
            single_part_error: false,
            single_part_loading: true,
        }
    }

    if(action.type === GET_SINGLE_PART_SUCCESS){
        return {
            ...state,
            single_part_loading: false,
            single_part: action.payload
        }
    }

    if(action.type === GET_SINGLE_PART_ERROR){
        return {
            ...state,
            single_part_loading: false,
            single_part_error: true
        }
    }



    throw new Error(`No Matching "${action.type}" - action type`)
}

export default parts_reducer;