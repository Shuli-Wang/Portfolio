import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Dmain.css";

function Dmain() {
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);

    return (
        <div className="Dmain">
            <div className="container-basic">
                <h1 style={{ marginTop: '2%', width: '96%', background: 'linear-gradient(to bottom, transparent 50%, #d2dbd0 50%' }}>Ongoing</h1>
                <div className="container-Dmain">
                    <div className="container-title">
                        <Link to="/TBD">
                            <h2>BlooTrack</h2>
                        </Link>
                        <button onClick={() => setIsVisible1((prev) => !prev)}>
                            {isVisible1 ? "Hide" : "Detail"}
                        </button>
                    </div>
                    <h3>Tech Stack: Python, Javascript, MongoDB</h3>
                    <p>BlooTrack is a progress-tracking app designed to help you stay consistent, motivated, and organized on your journey. With flexible tracking, intuitive charts, and a customizable interface, it transforms every small step into a meaningful achievement.</p>
                    <div className={`details ${isVisible1 ? "show" : "hide"}`}>
                        <p>Job searching can feel like an uphill journey—preparing for technical skills, navigating behavioural questions, and wondering if the effort will ever pay off.</p>
                        <p>I understand the struggle, therefore the idea behind BlooTrack is to empower users with tools to build daily habits, track milestones, and visualize long-term achievements. With plans for a customizable interface, intuitive progress charts, and flexible categories, my goal is to turn every small step into a reason to celebrate.</p>
                        <p>Unlike rigid systems, BlooTrack emphasizes flexibility and personal growth, empowering you to organize your progress in a way that works best for you. It’s more than a tool—it’s a companion that turns every small step into a meaningful accomplishment.</p>
                    </div>
                </div>

                <h1 style={{ marginTop: '4%', width: '96%', background: 'linear-gradient(to bottom, transparent 50%, #d2dbd0 50%' }}>Completed</h1>

                <div className="container-Dmain">
                    <div className="container-title">
                        <Link to="https://www.e-hospital.ca/" target="_blank" rel="noopener noreferrer">
                            <h2>EHR e-hospital Platform</h2></Link>
                        <button onClick={() => setIsVisible2((prev) => !prev)}>
                            {isVisible2 ? "Hide" : "Detail"}
                        </button>
                    </div>
                    <h3>Tech Stack: React, Node.js, MySQL</h3>
                    <p>The e-Hospital EHR Platform is a healthcare management system designed to streamline communication and operations between doctors, patients, and all healthcare-related workers and participants. With a focus on efficiency and usability, it enhances workflow management for administrators, improves patient record accessibility for doctors, and simplifies appointment coordination for patients.</p>
                    <div className={`details ${isVisible2 ? "show" : "hide"}`}>
                        <p>This project involved collaboration with a team of over 30 professionals, where I contributed both to the development and to shaping key system features.</p>
                        <p>One of my contributions was identifying the need for a dedicated administration system. By proposing to set aside a separate administration module, I helped the team design a more streamlined and efficient platform for managing healthcare-related workflows. This decision became a cornerstone of the project, ensuring the system could meet the needs of administrators without complicating the user experience for doctors and patients.</p>
                        <p>On the technical side, I was responsible for developing and optimizing several critical components, including the "Contact Us" and "Join Us" web pages and the administrator system. Using React, I implemented advanced data validation and verification processes to enhance usability and minimize errors, ensuring a seamless experience for all users.</p>
                        <p>For backend development, I worked with a MySQL database, designing workflows that ensured reliable data retrieval and updates. This contributed to the accurate management of information across the platform. Additionally, I implemented automated SMS notifications and data management workflows in Python, improving responsiveness and keeping users informed in real-time.</p>
                        <p>Collaborating with the team through GitHub, I contributed version-controlled updates, which facilitated a smooth and organized development process. This project was an invaluable experience, allowing me to strengthen my technical skills while contributing meaningfully to a platform that meets the diverse and complex needs of the EHR system.</p>
                    </div>
                </div>
                <div className="container-Dmain">
                    <div className="container-title">
                        <h2>Video Transmission System Based on the Neural Network</h2>
                        <button onClick={() => setIsVisible3((prev) => !prev)}>
                            {isVisible3 ? "Hide" : "Detail"}
                        </button>
                    </div>
                    <h3>Tech Stack: PyTorch, NumPy, IP-based transmission</h3>
                    <p>The system aimed to enhance real-time video transmission by optimizing the balance between speed and quality. Integrating an IP-based transmission mechanism and neural network-driven compression ensures efficient data flow without compromising latency or clarity.</p>
                    <div className={`details ${isVisible3 ? "show" : "hide"}`}>
                        <p>As part of a two-person team, I contributed to both the technical implementation and the overall design of the system, ensuring a well-rounded and effective solution.</p>
                        <p>The IP-based transmission mechanism integrated into the system enables seamless delivery of compressed video frames over networks, ensuring efficient data flow, and making it suitable for real-time applications where both speed and quality are critical. Besides, the system leverages neural network techniques to compress and encode video frames, optimizing the data transmission without compromising latency or visual clarity.</p>
                        <p>This project explored innovative ways to enhance video transmission systems, showcasing the potential of neural networks in solving complex technical challenges.</p>
                    </div>
                </div>

                <div className="container-Dmain">

                    <div className="container-title">
                        <h2>User Portrait Model for Digital Tourism</h2>
                        <button onClick={() => setIsVisible4((prev) => !prev)}>
                            {isVisible4 ? "Hide" : "Detail"}
                        </button>
                    </div>
                    <h3>Tech Stack: 3D-KNN, Agile Methodology</h3>
                    <p>This project focused on developing user portrait models to provide tourism stakeholders with data-driven insights into consumer behaviour. By leveraging machine learning and visualization techniques, it aimed to enhance decision-making in the digital tourism industry.</p>
                    <div className={`details ${isVisible4 ? "show" : "hide"}`}>
                        <p>Working with a team of four, I was responsible for designing and implementing the 3D-KNN algorithm in Python, which played a crucial role in processing and classifying a large dataset. This model was key to ensuring the portraits accurately reflected user behaviour and preferences, enabling stakeholders to make informed decisions. I also developed visual charts to highlight key trends and patterns in the data, making the insights more accessible and actionable for tourism stakeholders.</p>
                        <p>Additionally, I took on the responsibility of organizing and managing over 40 meetings. This ensured that the team stayed aligned with front-end and back-end development efforts integrated smoothly.</p>
                        <div className="container-details">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/developer/UserPortrait-1.png`}
                                alt="user-portrait"
                                className="image-details"
                            />
                            <img
                                src={`${process.env.PUBLIC_URL}/images/developer/UserPortrait-2.png`}
                                alt="user-portrait"
                                className="image-details"
                            />
                            <img
                                src={`${process.env.PUBLIC_URL}/images/developer/UserPortrait-3.png`}
                                alt="user-portrait"
                                className="image-details"
                            />

<img
                                src={`${process.env.PUBLIC_URL}/images/developer/UserPortrait-4.png`}
                                alt="user-portrait"
                                className="image-details"
                            />
                        </div>
                    </div>
                </div>
                <div className="container-Dmain">

                    <div className="container-title">
                        <h2>Smart Obstacle Detector</h2>
                        <button onClick={() => setIsVisible5((prev) => !prev)}>
                            {isVisible5 ? "Hide" : "Detail"}
                        </button>
                    </div>
                    <h3>Tech Stack: Embedded System, Android development, STM32F103 microcontroller, Baidu Cloud RDS</h3>
                    <p>The smart obstacle detection system is designed to help individuals, especially those with visual impairments, navigate their environment safely by detecting obstacles in real-time. It uses sensors and microcontrollers to identify obstacles in the user's path and provide feedback through audio cues on the mobile app to alert the user and guide them around the obstacles.</p>
                    <div className={`details ${isVisible5 ? "show" : "hide"}`}>
                        <p>I designed and implemented the core system independently, which utilized an STM32F103 microcontroller, an HC-05 Bluetooth module, and a human-body infrared motion detector sensor. I developed the embedded system in C, ensuring the system was reliable and responsive. In addition, I created an Android application in Java that received and processed raw obstacle data from the system, converting it into real-time voice prompts to help users understand their surroundings. For secure storage and data availability, I integrated Baidu Cloud RDS, ensuring that user information was both redundant and readily accessible.</p>
                        <p>This self-driven project required me to handle every aspect, from system design and embedded system development to app development and cloud integration. It not only deepened my technical expertise in multiple areas but also reinforced the importance of designing accessible, user-centric solutions for real-world challenges. I developed this project because I believe that science and technology exist to serve humanity. The opportunity to create a tool that could directly improve the lives of individuals with visual impairments motivated me throughout the process. This experience taught me the profound impact technology can have on enhancing accessibility, and I am more determined than ever to create solutions that prioritize the well-being of users.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dmain;