import baseUrl from '../../../Constants/BaseUrl';

const faculty = () => {
    return async(dispatch) => {
        try {
            const { data } = await baseUrl.get('/sea_scholarship_faculty', {
                params: {
                    access_token: 'MV8iuoDHgM',                    
                }
            } )  
            console.log(data)
            dispatch({ type: "GET_FACULTY", data: { faculty: data } })
        } catch(error) {
            console.log(error)
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
            console.log(error)
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
            console.log(error)
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
            console.log(error)
        }
    }
}

export default {
    faculty,
    university,
    infoContent,
    testimonial
}