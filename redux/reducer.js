import {CHANGE_SEARCH_LANGUAGE, SHOW_LOADER, HIDE_LOADER, ON_SEARCH} from './action'


const InitialState = {
    language: "Russian",
    loading: false,
    searchData: [],
}

export const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_LANGUAGE:
            return {...state, language: action.payload}
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case ON_SEARCH:
            return {...state, searchData: action.payload}
        default:
            return state
    }
}