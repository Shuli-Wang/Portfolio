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
                    <h1>Hi! my name is Shuli.</h1>
                    <div className="container-text">
                        <p>
                            I'm a developer, and a photographer.
                        </p>
                        <p>
                            I'm currently looking to grow as a software developer and collaborate with talented professionals. If your team is hiring, take a look at my <a href="https://drive.google.com/file/d/19l3Z-tnlD3KECcw4yjg7f4Kg0v9yFWtE/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Résumé</a> — We might be a good match! </p>
                        <p>
                            To share my journey and connect with like-minded individuals, I created this personal website. Here, you'll find my growing technical projects alongside my photography portfolio.
                        </p>
                        <p>
                            My path to software development began in 2018 when I started my undergraduate studies in Internet of Things Engineering. Later, I moved to Ottawa for further education and earned a Master’s degree in Electrical and Computer Engineering last year. Along the way, I built a strong foundation in programming, problem-solving, and creating practical solutions through various academic and personal projects.
                        </p>
                        <p>
                            Beyond coding, I am also a passionate photographer. Photography has instilled in me a strong sense of creativity, attention to detail, and the importance of connecting with people. These qualities enhance my technical proficiency and allow me to handle challenges with precision and innovative thinking.
                        </p>
                        <p>
                            Additionally, I’ve been working in a fast-paced Canadian retail environment, which has sharpened my ability to collaborate effectively with coworkers and stay calm under pressure.
                        </p>
                        <p>
                            If my story resonates with you, I’d love to have a conversation — whether over coffee, sharing ideas, or exploring opportunities. I’d appreciate it if you <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-nAvoNumTTxkiQTKnbzBXvLsLNxqo0CSlfU5nEwwMk5B4bQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">leave me a comment</a> with any advice or thoughts you’d like to share!
                        </p>
                    </div>
                    <div className="container-explore">
                        <h2>Reach out to me on</h2>
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
                        src={`${process.env.PUBLIC_URL}/images/Portrait-D.jpg`}
                        alt="Portrait-Developer"
                        className="image-portrait"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;