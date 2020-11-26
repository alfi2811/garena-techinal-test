
const defaultState = {
    user: null,    
    faculty: null,
    univ: null,
    infoContent: null,
    testi: null,
    errorMsg: null,
    err: null,
}

const ContentReducer = (state = defaultState, action) => {
    switch (action.type) {        
        case "GET_FACULTY": {
            return {
                ...state,
                ...action.data,                
            }
        }
        case "GET_UNIV": {
            return {
                ...state,
                ...action.data,                
            }
        }
        case "GET_INFO_CONTENT": {
            return {
                ...state,
                ...action.data,                
            }
        }
        case "GET_TESTIMONIAL": {
            return {
                ...state,
                ...action.data,                
            }
        }
        case "GET_ERROR": {
            return {
                ...state,
                ...action.data,                
            }
        }
        default:
            return state
    }
}

export default ContentReducer
