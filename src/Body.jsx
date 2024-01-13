import React from 'react';
import prabesh1 from '../src/assets/photos/prabesh.jpg';
import Fb1 from '../src/assets/logos/facebook.svg';
import IS1 from '../src/assets/logos/instagram.svg';
import GH1 from '../src/assets/logos/github.svg';
import LI1 from '../src/assets/logos/linkedin.svg';

const Body = () => {
    return (
        <div className="container pt-5 pb-5">
            <span>
                <div className="card-deck"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "40px"
                    }}>

                    {/* Card 1 - Introduction */}
                    <div className="card"
                        style={{

                            overflow: "hidden"
                        }}>
                        <div className="card-body"
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "20px"
                            }}>
                            <div>
                                <h4 className="card-title pb-2" style={{ textAlign: 'start' }}>Introduction</h4>
                                <p><strong>Name:</strong> Prabesh Aryal</p>
                                <p><strong>DOB: </strong>2001-12-02</p>
                                <p><strong>Studying at:</strong> Advanced College of Engineering and Management</p>
                                <p><strong>Residing in:</strong> Ratopul</p>
                                <p><strong>Hobbies:</strong> Sleeping, Watching Movies and Animes</p>
                            </div>
                            <img src={prabesh1} className="card-img-top" alt="My-Photo" style={{ width: "400px", borderRadius: "5px" }} />
                        </div>
                    </div>

                    {/* Card 2 - Educational Background */}
                    <div className="card"
                        style={{

                        }}>
                        <div className="card-body">
                            <h4>Educational Background</h4>
                            <div style={{ marginTop: "15px" }}>
                                <p><strong>SEE:</strong> Adarsh Secondary School, Nepalgunj</p>
                                <p><strong>+2:</strong>  Kathmandu Model College, Baghbazar-Kathmandu</p>
                                <p><strong>Bachelors:</strong> Advanced College of Engineering and Management, Balkhu-Kathmandu</p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Training/Certification */}
                    <div className="card"
                        style={{

                        }}>
                        <div className="card-body">
                            <h4>Training/Certification</h4>
                            <div style={{ marginTop: "15px" }}>
                                <p>ReactJS</p>
                                <p>WordPress</p>
                                <p>Google Digital Marketing</p>

                            </div>
                        </div>
                    </div>

                    {/* Card 4 - Social Media Icons */}
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title" id='contact'>Contact Me</h5>
                            <div className="d-flex justify-content-between">
                                <span
                                    style={{
                                        display: 'flex',
                                        gap: "15px",
                                        justifyContent: 'center'
                                    }}>
                                    <a href="https://www.facebook.com/prabesh072" >
                                        <img src={Fb1} style={{ height: '20px' }} />
                                    </a>
                                    <a href="https://www.instagram.com/prabesh072" >
                                        <img src={IS1} style={{ height: '20px' }} />
                                    </a>
                                    <a href="https://www.github.com/prabesh072" >
                                        <img src={GH1} style={{ height: '20px' }} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/prabesh072" >
                                        <img src={LI1} style={{ height: '20px' }} />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    );
}

export default Body;
