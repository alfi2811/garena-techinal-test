import React from 'react'

const ErrorMessage = (props) => {
    const { errorMsg, fullPage } = props    
    return (
        <div className={fullPage ? 'error full-page': 'error'}>
            {
                errorMsg === "Request failed with status code 404" ?
                <p>Page Not Found</p>
                : <p>{errorMsg} </p>
            }            
        </div>
    )
}

export default ErrorMessage
