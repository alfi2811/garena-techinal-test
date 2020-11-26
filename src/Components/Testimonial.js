import React from 'react'

const Testimonial = (props) => {
    const { namaProfil, fotoProfil, testiText } = props;
    return (
        <div>
            <div className="testimonial-card">
                <div className="card-pic">
                    <img src={fotoProfil} alt="Foto Profil" />
                </div>
                <div className="card-desc">
                    <div className="testi">{testiText}</div>
                    <div className="identitas"> {namaProfil} </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
