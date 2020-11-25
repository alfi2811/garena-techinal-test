import React, { useEffect } from 'react'
import { Program, Navbar, PartnerUniv, Timeline, Testimonial, Faq, Footer } from '../Components/Index'
import Slider from "react-slick";
import arrBack from "../Modules/Images/Slider/ArrowBack.png";
import arrNext from "../Modules/Images/Slider/ArrowNext.png";
import { connect } from 'react-redux';
import contentAction from '../Modules/Redux/Action/Content';

function NextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="arrow-next"
        onClick={onClick}
      >
          <img src={arrNext} alt="" />
      </div>
    );
  }
  
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="arrow-back"        
        onClick={onClick}
      >
          <img src={arrBack} alt="" />
      </div>
    );
  }

const LandingContainer = (props) => {
    const { dataFaculty, dataUniv, dataContent, dataTesti } = props;
    useEffect(() => {    
        props.faculty();                               
        props.univ();                               
        props.infoContent();                               
        props.testi();                               
    }, []);  
    useEffect(() => {          
        console.log(dataContent)
        console.log(dataTesti)
    }, [dataContent, dataTesti]);  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
    if (dataFaculty) {
        console.log(dataFaculty.data.length)
    }
    return (
        <div>
            <Navbar />
            {
                dataContent ?                 
                <div className="content">               
                    <Program desc={dataContent.program_content} freshmanDesc={dataContent.freshman_program} seniorDesc={dataContent.senior_program} />
                    <div className="partner-section">
                        <div className="partner-title">Partner Universities</div>
                        {
                            dataUniv && dataFaculty ? 
                            <Slider {...settings} className="slider-partner-section">
                                {   
                                    dataUniv.data.map((data) => {
                                        let dataFakultas = []
                                        dataFaculty.data.map((dataFa) => {
                                            if (dataFa.univ_id === data.id) {
                                                dataFakultas.push(dataFa)
                                            }
                                        })
                                        return (
                                            <div>
                                                <PartnerUniv key={data.id} univFakultas={dataFakultas} univName={data.univ_name} univLogo={data.univ_logo} />
                                            </div>   
                                        )
                                    }                                        
                                    )                                                    
                                }                                                        
                            </Slider>
                            : ''
                        }
                    </div>
                    <Timeline regisDate={dataContent.date_regis} interviewDate={dataContent.date_interview} essaycvDate={dataContent.date_esay_cvscreen} announceDate={dataContent.date_announce} />
                    <div className="testimonial-section">
                        <div className="testimonial-title">Testimonial</div>
                        {
                            dataTesti ?
                                <Slider {...settings} className="slider-testimonial-section">
                                    {
                                        dataTesti.data.map((testi) =>
                                            <div>
                                                <Testimonial key={testi.id} namaProfil={testi.name} fotoProfil={testi.image} testiText={testi.story} />
                                            </div>
                                        )
                                    }                                                                        
                                </Slider>
                                : ''
                        }                   

                    </div>
                    <Faq dataFaq={dataContent.faq_content} />
                </div>            
                : ''
           }    
           <Footer />        
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dataFaculty: state.content.faculty,
        dataUniv: state.content.univ,
        dataContent: state.content.infoContent,
        dataTesti: state.content.testi,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        faculty: () => dispatch(contentAction.faculty()),      
        univ: () => dispatch(contentAction.university()),      
        infoContent: () => dispatch(contentAction.infoContent()),      
        testi: () => dispatch(contentAction.testimonial()),      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer)
