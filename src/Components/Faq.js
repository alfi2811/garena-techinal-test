import React from 'react'

const Faq = (props) => {
    const { dataFaq } = props;
    const convert = (data) => {
        return {__html: data };
   }
    return (
        <div className="faq-section">
            <div className="faq">
                <div className="faq-title">
                    <p>FAQ</p>
                </div>
                <div className="faq-group">                 
                        <div className="question" dangerouslySetInnerHTML={convert(dataFaq)} >
                        </div>                

                </div>
            </div>

        </div>
    )
}

export default Faq
