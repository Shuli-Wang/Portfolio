import { Link } from 'react-router-dom';

function Dmain() {
    return (
        <div className="Testimonials">
            <div className="container-basic">
                <h1 style={{marginTop:'2%', width: '96%',  background: 'linear-gradient(to bottom, transparent 50%, #d2dbd0 50%' }}>UpComing</h1>
                <div className="container-testimonials">
                <Link to="/TBD"><p style={{ fontWeight: 'bold' }}>BlooTrack</p></Link>
                    <p style={{ marginTop: '2%' }}>BlooTrack is a dynamic progress-tracking app designed to help you stay consistent, motivated, and organized as you work toward your goals. Whether you’re building daily habits, tracking milestones, or visualizing your long-term achievements, BlooTrack empowers you with a sleek, customizable interface to track your journey in real time. With flexible categories, intuitive progress charts, and a focus on personal growth, BlooTrack turns every small step into a celebration of progress. Start today, and let BlooTrack guide you toward your next big accomplishment!</p>
                </div>
                <h1 style={{marginTop:'4%', width: '96%', background: 'linear-gradient(to bottom, transparent 50%, #d2dbd0 50%' }}>Completed</h1>
                <div className="container-testimonials">
                <Link to="https://www.e-hospital.ca/"><p style={{ fontWeight: 'bold' }}>EHR e-hospital</p></Link>
                    <p style={{ marginTop: '2%' }}>The e-Hospital EHR Platform is a healthcare management system designed to streamline communication and operations between administrators, doctors, and patients. While working on this project, I developed and optimized the "Contact Us" and "Join Us" web pages, as well as the administrator system, with a strong focus on usability and efficiency. Using React, I implemented advanced data validation and verification processes to reduce errors and provide users with a seamless experience. On the backend, I worked with a MySQL database, designing workflows for reliable data retrieval and updates to ensure accurate information management.</p>
                    <p style={{ marginTop: '2%' }}>One of the most rewarding parts of this project was implementing automated SMS notifications and data management workflows in Python. This feature significantly improved responsiveness, allowing users to feel more engaged and supported. Collaborating with my team via GitHub, I contributed to the repositories with version-controlled updates, ensuring a smooth and organized development process. This project not only strengthened my technical skills but also reinforced the importance of communication and collaboration in building a platform that truly meets user needs.</p>
                </div>
                <div className="container-testimonials">
                    <p style={{ marginTop: '40px',fontWeight: 'bold' }}>Video Transmission System Based on the Neural Network</p>
                    <p style={{ marginTop: '2%' }}>This project was centered on improving the efficiency of real-time video transmission while balancing speed and quality. I applied PyTorch and NumPy to develop a video frame compression and encoding solution, optimizing the data transmission rate without compromising on latency or visual quality. The challenge of maintaining this balance pushed me to refine the algorithm to ensure it met both performance and usability standards.</p>
                </div>
                <div className="container-testimonials">
                    <p style={{ marginTop: '40px', fontWeight: 'bold' }}>Digital Tourism</p>
                    <p style={{ marginTop: '2%' }}>This project focused on designing and developing user portrait models tailored to meet the needs of tourism stakeholders. I worked extensively on processing and classifying a substantial dataset using the 3D-KNN algorithm in Python, ensuring the models were accurate and actionable. To make the data more accessible and insightful, I created visual charts that highlighted key patterns and trends, enabling stakeholders to make informed decisions.</p>
                    <p style={{ marginTop: '2%' }}>Collaboration was a major part of this project. As a team of five, we embraced the Scrum method, which required organizing and facilitating over 40 meetings to keep front-end and back-end development aligned. These discussions were key to ensuring smooth integration and rigorous testing. This experience not only deepened my technical expertise but also sharpened my ability to coordinate across disciplines and deliver a cohesive solution for the digital tourism industry.</p>
                </div>
                <div className="container-testimonials">
                    <p style={{marginTop: '40px', fontWeight: 'bold' }}>Smart Obstacle Detector</p>
                    <p style={{ marginTop: '2%' }}>This project aimed to enhance accessibility for individuals with visual impairments by developing a smart obstacle detection system. I designed and implemented the system using an STM32F103 microcontroller, an HC-05 Bluetooth module, and a human body infrared motion detector sensor. The embedded system was developed in C, with a focus on reliability and responsiveness.</p>
                    <p style={{ marginTop: '2%' }}>To complement the hardware, I developed an Android application in Java that received and processed raw obstacle data from the system. The app translated this data into real-time voice prompts, providing users with clear and immediate feedback about their surroundings. Additionally, user information was securely stored in Baidu Cloud RDS, ensuring data redundancy and availability.</p>
                    <p style={{ marginTop: '2%' }}>This project was a meaningful experience, combining hardware and software development to address real-world accessibility challenges. It reinforced the importance of designing user-centric solutions while deepening my skills in embedded systems, app development, and cloud integration.</p>
                </div>
                
                </div>
                </div>
    );
}

export default Dmain;