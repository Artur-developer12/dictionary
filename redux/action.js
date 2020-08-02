export const CHANGE_SEARCH_RUSSIAN = 'CHANGE_SEARCH_RUSSIAN'
export const CHANGE_SEARCH_CIRCASSIAN = 'CHANGE_SEARCH_CIRCASSIAN'
export const SHOW_LOADER = 'SHOW_LOADER'
export const HIDE_LOADER = 'HIDE_LOADER'
export const FOUNDED_WORD = 'FOUNDED_WORD'
export const CLEAR_STATE = 'CLEAR_STATE'
export const ON_SEARCH_IN_RUSSIAN = 'ON_SEARCH_IN_RUSSIAN'
export const ON_SEARCH_IN_CIRCASSIAN = 'ON_SEARCH_IN_CIRCASSIAN'

export const RUSSIAN = 'russian'
export const CIRCASSIAN = 'circassian'

export function changeSearchToeRussian(){
    return{
        type:CHANGE_SEARCH_RUSSIAN,
        payload: RUSSIAN
    }
}
export function changeSearchToCircassian(){
    return{
        type:CHANGE_SEARCH_CIRCASSIAN,
        payload: CIRCASSIAN
    }
}
export function showLoader(){
    return {
        type: SHOW_LOADER
    }
}


export function hideLoader(){
    return {
        type: HIDE_LOADER
    }
}

export function clearState(){
    return {
        type: CLEAR_STATE
    }
}


export function fetchRussianWords(value=''){
    return async dispatch =>{
        try {
            dispatch(showLoader())
            let response = await fetch(`http://192.168.43.136:1337/rus-words/search?letter=${value}`)
            let responseJson = await response.json();
            dispatch({type: ON_SEARCH_IN_RUSSIAN, payload: responseJson})
            dispatch(hideLoader())

          } catch (error) {
            console.error(error);
          }
    }
}
export function fetchCircassianWords(value=''){
    return async dispatch =>{
        try {
            dispatch(showLoader())
            let response = await fetch(`http://192.168.43.136:1337/cher-words/search?letter=${value}`)
            let responseJson = await response.json();
            dispatch({type: ON_SEARCH_IN_CIRCASSIAN, payload: responseJson})
            dispatch(hideLoader())

          } catch (error) {
            console.error(error);
          }
    }
}


export function getFondedWord(id){
    return async dispatch =>{
        try {
            // dispatch(showLoader())
            let response = await fetch(`http://192.168.43.136:1337/translates/${id}`)
            let responseJson = await response.json();
            dispatch({type: FOUNDED_WORD, payload: responseJson})
            // dispatch(hideLoader())

          } catch (error) {
            console.error(error);
          }
    }
}

 

 