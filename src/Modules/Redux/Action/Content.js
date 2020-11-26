import baseUrl from '../../../Constants/BaseUrl';

const faculty = () => {
    return async(dispatch) => {
        try {
            const { data } = await baseUrl.get('/sea_scholarship_faculty', {
                params: {
                    access_token: 'MV8iuoDHgM',                    
                }
            } )              
            dispatch({ type: "GET_FACULTY", data: { faculty: data } })
        } catch(error) {
               dispatch({ type: "GET_ERROR", data: { err: error.message } })       
        }
    }
}

const university = () => {
    return async(dispatch) => {
        try {
            const { data } = await baseUrl.get('/sea_scholarship_univ', {
                params: {
                    access_token: 'MV8iuoDHgM',  
                    fields: '*.*'
                }
            } )              
            dispatch({ type: "GET_UNIV", data: { univ: data } })
        } catch(error) {
            dispatch({ type: "GET_ERROR", data: { err: error.message } })       
        }
    }
}

const infoContent = () => {
    return async(dispatch) => {
        try {
            const { data } = await baseUrl.get('/sea_scholarship', {
                params: {
                    access_token: 'MV8iuoDHgM',  
                    fields: '*.*'
                }
            } )              
            dispatch({ type: "GET_INFO_CONTENT", data: { infoContent: data.data[0] } })
        } catch(error) {                                    
            dispatch({ type: "GET_ERROR", data: { err: error.message } })       
        }
    }
}

const testimonial = () => {
    return async(dispatch) => {
        try {
            const { data } = await baseUrl.get('/sea_scholarship_testimoni', {
                params: {
                    access_token: 'MV8iuoDHgM',  
                    fields: '*.*'
                }
            } )              
            dispatch({ type: "GET_TESTIMONIAL", data: { testi: data } })
        } catch(error) {
            dispatch({ type: "GET_ERROR", data: { err: error.message } })       
        }
    }
}

export default {
    faculty,
    university,
    infoContent,
    testimonial
}