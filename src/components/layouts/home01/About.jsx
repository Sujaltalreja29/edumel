import React, { Component } from 'react';


class About extends Component {
    constructor(props){
        super(props);

        this.state = {
            process: [
                {
                    id: 1,
                    step: '01',
                    title: 'Signup with all info',
                    text: 'Lorem ipsum dolor seat ameat dui too consecteture elite adipaising.',
                    extraName: 'bg-1',
                },
                // {
                //     id: 2,
                //     step: '02',
                //     title: 'Take your Admission',
                //     text: 'Lorem ipsum dolor seat ameat dui too consecteture elite adipaising.',
                //     extraName: 'bg-2',
                // },
                {
                    id: 3,
                    step: '03',
                    title: 'Learn from online',
                    text: 'Lorem ipsum dolor seat ameat dui too consecteture elite adipaising. ',
                    extraName: 'bg-3',
                },
                // {
                //     id: 4,
                //     step: '04',
                //     title: 'Get certificate',
                //     text: 'Lorem ipsum dolor seat ameat dui too consecteture elite adipaising. ',
                //     extraName: 'bg-1',
                // }
            ],

        }
    }


    render() {
        return (
        <section className="work-process section-padding">
            <div className="container">
                <div className="row mb-40">
                    <div className="col-xl-8">
                        <div className="section-heading ">
                            <h2 className="font-lg">Principal's Message</h2>
                            <p className="quote">“Education is the most powerful weapon which you can use to change the world.” – Nelson Mandela</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-xl-7 pe-xl-5 col-lg-2">
                        <div className="row">
                            {
                                  this.state.process.map((data,i) => (
                                    <div className="col-xl-6 col-lg-6 col-md-6" key={data.id}>
                                        <div className="step-item ">
                                            <div className={`step-number ${data.extraName}`}>{data.step}</div>
                                            <div className="step-text">
                                                <h5>{data.title}</h5>
                                                <p>{data.text}</p>
                                            </div>
                                        </div>
                                    </div>

                                  ))
                            }
                            
                        </div>
                    </div>

                    <div className="col-xl-5">

                            <img src={`https://cathedral-school.com/wp-content/uploads/2016/05/P-1b.jpg`}  alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </section>
     
        );
    }
}

export default About;
