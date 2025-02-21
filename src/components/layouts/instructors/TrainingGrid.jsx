import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import trainingData from '../../../data/instructor/trainingData.json';


class TrainingGrid extends Component {

    render() {
        const TeamMembers = trainingData.slice(0, 8);

        return (
            <section className="section-instructors section-padding">
                <div className="container">
                    <div className="row">
                    {
                        TeamMembers.map((data) => (
                            <div className="col-lg-3 col-md-6 col-sm-6" style={{marginBottom : "30px"}}  key={ data.id }>
                                <div className="team-item mb-2" style={{width : "275px", height : "370px"}}>
                                    <div className="team-img">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/team/${data.image}`} alt="" className="img-fluid" style={{width:"232px"}}/>
                                    </div>
                                    <div className="team-content">
                                        <div className="team-info">
                                            <h4>{ data.title}</h4>
                                            <p>{ data.date }</p>
                                            <h4>{ data.trainer}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ) )
                    }
                    </div>
                </div>
            </section>
            
        

        );
    }
}

export default TrainingGrid;