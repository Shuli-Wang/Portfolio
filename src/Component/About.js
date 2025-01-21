import React, { useState } from 'react';
import './About.css';

function About() {
    const [emailCopied, setEmailCopied] = useState(false);

    const handleClick = () => {
        const email = 'swang515@uottawa.ca';

        // Copy email to clipboard
        navigator.clipboard.writeText(email).then(() => {
            setEmailCopied(true);
            // Show confirmation dialog
            const shouldRedirect = window.confirm("Email copied! Open your mailbox now?");
            if (shouldRedirect) {
                // Redirect to email client
                window.location.href = `mailto:${email}`;
            } else {
                setEmailCopied(false);
            }
        }).catch(err => {
            console.error('Failed to copy email:', err);
        });
    };


    return (
        <div className="About">
            <div className="container-about">
                <div className="container-blog">
                    <h1 style={{ marginTop: '4%' }}>Hi! my name is Shuli.</h1>
                    <div className="container-text">
                        <p>
                            I'm a developer, and a photographer.
                        </p>
                        <p>
                            My path to software development began in 2018 when I started my undergraduate studies in IoT Engineering. Later, I moved to Ottawa for further education and earned a Master’s degree in Electrical and Computer Engineering last year. Along the way, I built a strong foundation in programming, problem-solving, and creating practical solutions through various academic and personal projects.
                        </p>
                        <p>
                            During the EHR e-hospital project, I gained valuable experience in adapting to a new workflow quickly and collaborating closely with teams. Besides, working in a fast-paced Canadian retail environment taught me to maintain focus and perform effectively under pressure.
                        </p>
                        <p>
                            Beyond coding, I am also a passionate photographer. Photography has shaped my approach to problem-solving by teaching me creativity, attention to detail, and the importance of connecting with people. These qualities enhance my technical proficiency and allow me to handle challenges with precision and innovative thinking.
                        </p>
                        <p>
                            Currently, I am looking to grow as a junior developer and collaborate with a professional team. To share my journey and build new connections, I created this personal website where you can explore both my photography portfolio and my technical expertise.
                        </p>
                        <p>
                            If my story resonates with you, I’d love to have a conversation — whether it’s over coffee, discussing ideas, or exploring opportunities to collaborate.
                        </p>
                    </div>
                    <div className="container-explore">
                        <h2 style={{ marginTop: '0' }}>
                            Reach out to me on</h2>
                        <div className="container-button">
                            <button className='button-explore'
                                onClick={() => window.location.href = 'https://www.linkedin.com/in/shuli-wang-uottawa/'}>
                                LinkedIn
                            </button>
                            <button className='button-explore' onClick={handleClick}>
                                Email
                            </button>
                        </div>
                    </div>
                </div>

                {/* Second container */}
                <div className="container-image">
                    <img
                        src="/images/portrait-D.jpg"
                        alt="Developer"
                        className="image-portrait"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;