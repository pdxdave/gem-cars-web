import {
    GET_PARTS_BEGIN,
    GET_PARTS_SUCCESS,
    GET_PARTS_ERROR
} from '../actions'

const parts_reducer = (state, acton) => {

    if(action.type === GET_PARTS_BEGIN) {
        return {
            ...state,
            parts_loading: true
        }
    }

    throw new Error(`No Matching "${action.type}" - action type`)
}

export default parts_reducer;