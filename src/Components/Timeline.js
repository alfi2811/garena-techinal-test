import React from 'react'

const Timeline = (props) => {
    const { regisDate, interviewDate, essaycvDate, announceDate } = props;
    return (
        <div className="timeline-section" id="timeline-sea">
            <div className="timeline">
                <div className="timeline-title">
                    <p>Timeline</p>
                </div>
                <div className="timeline-img">
                    <div className="img-card">
                        <p className="title">Registration</p>
                        <img src="https://idscholarships.seagroup.com/static/media/Timeline-1.4f77d93f.png" alt="" />
                        <p className="date">{regisDate}</p>
                        <div className="line-step"></div>
                    </div>
                    <div className="img-card">
                        <p className="title">Essay and CV Screening</p>
                        <img src="https://idscholarships.seagroup.com/static/media/Timeline-2.932ea861.png" alt="" />
                        <p className="date">{essaycvDate}</p>
                        <div className="line-step"></div>
                    </div>
                    <div className="img-card">
                        <p className="title">On-campus Interview</p>
                        <img src="https://idscholarships.seagroup.com/static/media/Timeline-3.7440470f.png" alt="" />
                        <p className="date">{interviewDate}</p>
                        <div className="line-step"></div>
                    </div>                
                    <div className="img-card">
                        <p className="title">Announcement of Selected Scholars</p>
                        <img src="https://idscholarships.seagroup.com/static/media/Timeline-3.7440470f.png" alt="" />
                        <p className="date">{announceDate}</p>
                        
                    </div>                
                </div>
            </div>

        </div>
    )
}

export default Timeline
