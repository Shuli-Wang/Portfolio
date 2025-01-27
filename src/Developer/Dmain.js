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
                            {isVisible1 ? "Hide" : "View"}
                        </button>
                    </div>
                    <h3>Keywords: Python, Javascript, MongoDB</h3>
                    <div className={`details ${isVisible1 ? "show" : "hide"}`}>
                        <p style={{ marginTop: '2%' }}>Job searching can feel like an uphill journey—preparing for technical skills, navigating behavioural questions, and wondering if the effort will ever pay off. I understand the struggle, which is why I’m creating BlooTrack, a dynamic progress-tracking app to help us stay consistent, motivated, and organized while pursuing our goals.</p>
                        <p style={{ marginTop: '2%' }}>The idea behind BlooTrack is to empower users with tools to build daily habits, track milestones, and visualize long-term achievements. With plans for a customizable interface, intuitive progress charts, and flexible categories, my goal is to turn every small step into a reason to celebrate.</p>
                        <p style={{ marginTop: '2%' }}>Unlike rigid systems, BlooTrack emphasizes flexibility and personal growth, empowering you to organize your progress in a way that works best for you. It’s more than a tool—it’s a companion that turns every small step into a meaningful accomplishment.</p>
                    </div>
                </div>

                <h1 style={{ marginTop: '4%', width: '96%', background: 'linear-gradient(to bottom, transparent 50%, #d2dbd0 50%' }}>Completed</h1>

                <div className="container-Dmain">
                    <div className="container-title">
                        <Link to="https://www.e-hospital.ca/" target="_blank" rel="noopener noreferrer">
                        <h2>EHR e-hospital Platform</h2></Link>
                        <button onClick={() => setIsVisible2((prev) => !prev)}>
                            {isVisible2 ? "Hide" : "View"}
                        </button>
                    </div>
                    <h3>Keywords: React, Node.js, MySQL</h3>
                    <div className={`details ${isVisible2 ? "show" : "hide"}`}>
                        <p style={{ marginTop: '2%' }}>The e-Hospital EHR Platform is a healthcare management system designed to streamline communication and operations between doctors, patients, and all healthcare-related workers and participants. This project involved collaboration with a team of over 30 professionals, where I contributed both to the development and to shaping key system features.</p>
                        <p style={{ marginTop: '2%' }}>One of my contributions was identifying the need for a dedicated administration system. By proposing to set aside a separate administration module, I helped the team design a more streamlined and efficient platform for managing healthcare-related workflows. This decision became a cornerstone of the project, ensuring the system could meet the needs of administrators without complicating the user experience for doctors and patients.</p>
                        <p style={{ marginTop: '2%' }}>On the technical side, I was responsible for developing and optimizing several critical components, including the "Contact Us" and "Join Us" web pages and the administrator system. Using React, I implemented advanced data validation and verification processes to enhance usability and minimize errors, ensuring a seamless experience for all users.</p>
                        <p style={{ marginTop: '2%' }}>For backend development, I worked with a MySQL database, designing workflows that ensured reliable data retrieval and updates. This contributed to the accurate management of information across the platform. Additionally, I implemented automated SMS notifications and data management workflows in Python, improving responsiveness and keeping users informed in real-time.</p>
                        <p style={{ marginTop: '2%' }}>Collaborating with the team through GitHub, I contributed version-controlled updates, which facilitated a smooth and organized development process. This project was an invaluable experience, allowing me to strengthen my technical skills while contributing meaningfully to a platform that meets the diverse and complex needs of the EHR system.</p>
                    </div>
                </div>
                <div className="container-Dmain">
                    <div className="container-title">
                    <h2>Video Transmission System Based on the Neural Network</h2>
                        <button onClick={() => setIsVisible3((prev) => !prev)}>
                            {isVisible3 ? "Hide" : "View"}
                        </button>
                    </div>
                    <h3>Keywords: PyTorch, NumPy, IP-based transmission</h3>
                    <div className={`details ${isVisible3 ? "show" : "hide"}`}>
                        <p style={{ marginTop: '2%' }}>This project focused on improving the efficiency of real-time video transmission by balancing speed and quality. As part of a two-person team, I contributed to both the technical implementation and the overall design of the system, ensuring a well-rounded and effective solution.</p>
                        <p style={{ marginTop: '2%' }}>An IP-based transmission mechanism was integrated into the system, enabling seamless delivery of compressed video frames over networks. This design ensures efficient data flow, making it suitable for real-time applications where both speed and quality are critical. Besides, the system leverages neural network techniques to compress and encode video frames, optimizing the data transmission process without compromising latency or visual clarity.</p>
                        <p style={{ marginTop: '2%' }}>Through this project, we explored innovative ways to enhance video transmission systems, showcasing the potential of neural networks in solving complex technical challenges.</p>
                    </div>
                </div>

                <div className="container-Dmain">

                    <div className="container-title">
                    <h2>User Portrait Model for Digital Tourism</h2>
                        <button onClick={() => setIsVisible4((prev) => !prev)}>
                            {isVisible4 ? "Hide" : "View"}
                        </button>
                    </div>
                    <h3>Keywords: 3D-KNN, Scrum, Agile</h3>
                    <div className={`details ${isVisible4 ? "show" : "hide"}`}>
                        <p style={{ marginTop: '2%' }}>This project focused on designing and developing user portrait models to address the needs of tourism stakeholders. Developed by a team of four, the project aimed to create data-driven models that provided actionable insights into consumer behaviour and preferences within the digital tourism industry.</p>
                        <p style={{ marginTop: '2%' }}>I was responsible for designing and implementing the 3D-KNN algorithm in Python, which played a crucial role in processing and classifying a large dataset. This model was key to ensuring the portraits accurately reflected user behaviour and preferences, enabling stakeholders to make informed decisions. I also developed visual charts to highlight key trends and patterns in the data, making the insights more accessible and actionable for tourism stakeholders.</p>
                        <p style={{ marginTop: '2%' }}>Additionally, I took on the responsibility of organizing and managing over 40 meetings using the Scrum method. This ensured that the team stayed aligned with front-end and back-end development efforts integrated smoothly.</p>
                    </div>
                </div>
                <div className="container-Dmain">

                    <div className="container-title">
                    <h2>Smart Obstacle Detector</h2>
                        <button onClick={() => setIsVisible5((prev) => !prev)}>
                            {isVisible5 ? "Hide" : "View"}
                        </button>
                    </div>
                    <h3>Keywords: Embedded System, Android development, STM32F103 microcontroller, Baidu Cloud RDS</h3>
                    <div className={`details ${isVisible5 ? "show" : "hide"}`}>
                        <p style={{ marginTop: '2%' }}>This independent project aimed to enhance accessibility for individuals with visual impairments by developing a smart obstacle detection system. The system used a combination of hardware and software components to provide real-time feedback, helping users navigate their environment more effectively.</p>
                        <p style={{ marginTop: '2%' }}>I designed and implemented the core system, which utilized an STM32F103 microcontroller, an HC-05 Bluetooth module, and a human-body infrared motion detector sensor. I developed the embedded system in C, ensuring the system was reliable and responsive. In addition, I created an Android application in Java that received and processed raw obstacle data from the system, converting it into real-time voice prompts to help users understand their surroundings. For secure storage and data availability, I integrated Baidu Cloud RDS, ensuring that user information was both redundant and readily accessible.</p>
                        <p style={{ marginTop: '2%' }}>This self-driven project required me to handle every aspect, from system design and embedded system development to app development and cloud integration. It not only deepened my technical expertise in multiple areas but also reinforced the importance of designing accessible, user-centric solutions for real-world challenges. I developed this project because I believe that science and technology exist to serve humanity. The opportunity to create a tool that could directly improve the lives of individuals with visual impairments motivated me throughout the process. This experience taught me the profound impact technology can have on enhancing accessibility, and I am more determined than ever to create solutions that prioritize the well-being of users.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Dmain;