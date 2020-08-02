import {
    CHANGE_SEARCH_RUSSIAN,
    CHANGE_SEARCH_CIRCASSIAN, 
    SHOW_LOADER, HIDE_LOADER, 
    ON_SEARCH_IN_RUSSIAN, 
    FOUNDED_WORD, 
    CLEAR_STATE,
    ON_SEARCH_IN_CIRCASSIAN

} from './action'


const InitialState = {
    language: "russian",
    loading: false,
    searchData: [],
    foundedWord: [],
}

export const reducer = (state = InitialState, action) => {
    switch (action.type) {

        // смена языка поиска
        case CHANGE_SEARCH_RUSSIAN:
            return {...state, language: action.payload}
        case CHANGE_SEARCH_CIRCASSIAN:
            return {...state, language: action.payload}

            // прелоадер
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}


            // поиск слов в базе данных
        case ON_SEARCH_IN_RUSSIAN:
            return {...state, searchData: action.payload}
        case ON_SEARCH_IN_CIRCASSIAN:
            return {...state, searchData: action.payload}


            // наиденное слово
        case FOUNDED_WORD:
            return {...state, foundedWord: action.payload}

            // очистка стейта
        case CLEAR_STATE:
            return {...state, foundedWord: []}
            
        default:
            return state
    }
}