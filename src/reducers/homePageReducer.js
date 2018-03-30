import { GET_SEARCH } from '../constants/actionTypes';
import objectAssign from 'object-assign';
const initialState = {
    list: []
}
export default function homePage(state = initialState, action) {
    switch (action.type) {
        case GET_SEARCH:
            return objectAssign([], state, { list: action.payload });

        default:
            return state;
    }
}