import React from 'react'

const Program = (props) => {
    const { desc, freshmanDesc, seniorDesc } = props;
    const htmlku = (data) => {
         return {__html: data };
    }
    return (
        <div className="program-section" id="program-sea">
            <div className="desc">
                <h1 className="title">Undergraduate Scholarship Program</h1>
                <p className="text">{desc} </p>
            </div>
            <div class="program-card">
                <div className="card">                
                    <img src="https://idscholarships.seagroup.com/static/media/icon-freshmen.d66d9ccc.png" alt="freshman program" />                    
                    <h3 className="card-title">Sea Freshman Scholarship Program</h3>
                    <div className="card-desc" dangerouslySetInnerHTML={htmlku(freshmanDesc)} >                                              
                        
                    </div>

                </div>
                <div className="card">
                    <div className="picture">
                        <img src="https://idscholarships.seagroup.com/static/media/icon-senior.9fa8151d.png" alt="senior program" />
                    </div>
                    <h3 className="card-title">Sea Senior Scholarship Program</h3>
                    <div className="card-desc" dangerouslySetInnerHTML={htmlku(seniorDesc)}>                        
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Program
