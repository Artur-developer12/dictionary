export const CHANGE_SEARCH_LANGUAGE = 'CHANGE_SEARCH_LANGUAGE'
export const SHOW_LOADER = 'SHOW_LOADER'
export const HIDE_LOADER = 'HIDE_LOADER'
export const ON_SEARCH = 'ON_SEARCH'


export function changeLanguage(language){
    return{
        type:CHANGE_SEARCH_LANGUAGE,
        payload: language
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


export function fetchSearch(){
    return async dispatch =>{
        try {
            let response = await fetch('https://jsonplaceholder.typicode.com/users/1')
            let responseJson = await response.json();
            dispatch({type: ON_SEARCH, payload: responseJson})
          } catch (error) {
            console.error(error);
          }
    }
}

 

 