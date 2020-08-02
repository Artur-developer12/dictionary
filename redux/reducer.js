import {CHANGE_SEARCH_RUSSIAN,CHANGE_SEARCH_CIRCASSIAN, SHOW_LOADER, HIDE_LOADER, ON_SEARCH, FOUNDED_WORD, CLEAR_STATE} from './action'


const InitialState = {
    language: "russian",
    loading: false,
    searchData: [],
    foundedWord: [],
}

export const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_RUSSIAN:
            return {...state, language: action.payload}
        case CHANGE_SEARCH_CIRCASSIAN:
            return {...state, language: action.payload}
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        case ON_SEARCH:
            return {...state, searchData: action.payload}
        case FOUNDED_WORD:
            return {...state, foundedWord: action.payload}
        case CLEAR_STATE:
            return {...state, foundedWord: []}
            
        default:
            return state
    }
}