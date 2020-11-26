import React from 'react'

const PartnerUniv = (props) => {
    const { univName, univLogo, univFakultas} = props;    
    let sum = univFakultas.length / 14;
    let list = []    
    let minimal
    for (let i = 0; i < sum; i++){
        minimal = (i+1) * 14 - 14
        list.push(univFakultas.slice(minimal, minimal+14))
    }          
    return (
        <div className="univ-section">
            <div className="university">
                <div className="univ-pic">
                    <img src={univLogo} alt="Univ Logo" />
                </div>
                <div className="univ-info">
                    <h3 className="univ-title">{univName}</h3>
                    <div className="faculty">
                        {/* <ul>                            
                        {
                            univFakultas.map((fakultas) =>
                            <li>{fakultas.name} - {fakultas.univ_id}</li>
                            )
                        }
                        </ul>                         */}
                        {
                                list.map((data) =>
                                    <ul>
                                        {
                                            data.map((fak) => 
                                                <li> {fak.name} </li>
                                            )
                                        }
                                    </ul>
                                    
                                )
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerUniv
