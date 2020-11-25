import React from 'react'

const PartnerUniv = (props) => {
    const { univName, univLogo, univFakultas} = props;
    console.log(univFakultas)
    const pemisah = (limit) => {
        let res = []
        for(let i = 0; i < limit; i++){
            res.push(<li>{univFakultas[i].name}</li>)
        }    
        return res;
    }
    let sum = univFakultas.length / 10;
    let list = []
    let temp = 0
    for(let i = 0; i < sum; i++){
        list.push(<ul>{pemisah(temp)}</ul>)
        temp = temp + 10
    }
    console.log(list)
    return (
        <div className="univ-section">
            <div className="university">
                <div className="univ-pic">
                    <img src={univLogo} />
                </div>
                <div className="univ-info">
                    <h3 className="univ-title">{univName}</h3>
                    <div className="faculty">
                        <ul>
                        {
                            univFakultas.map((fakultas) =>
                            <li>{fakultas.name} - {fakultas.univ_id}</li>
                            )
                        }
                        </ul>
                        <ul>
                            <li>Bioenergy and Chemurgy</li>
                            <li>Entrepreneurship</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnerUniv
