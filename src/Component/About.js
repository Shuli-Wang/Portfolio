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
                    <div className="container-text">
                    <h1>Some people see the world through code, others through a camera — I do both.</h1>
                        <p>
                            My work is all about bringing clarity — whether through intuitive web design or storytelling photography. As a developer, I focus on making digital experiences smooth and effective. As a photographer, I capture the essence of a moment. In both, I strive for impact.
                        </p>
                        <p>My path to software development began in 2018 when I started my undergraduate studies in Internet of Things Engineering. Unlike those who grew up coding from an early age, I didn’t have much access to a computer until college. But when I did, I quickly realized that building applications and websites isn’t just about technology—it’s about people.</p>
                        <p>
                        I’ve seen firsthand how technology can transform lives, and that understanding drives my approach to development. Later, I moved to Ottawa for further education and earned a Master’s degree in Electrical and Computer Engineering last year. Along the way, I built a strong foundation in programming, problem-solving, and creating practical solutions through various academic and personal projects.
                        </p>
                        <p>
                            Beyond coding, I am also a passionate photographer. Funny enough, I used to dislike having my photo taken—I found it frustrating when the results didn’t reflect how I wanted to be seen. That changed when I accidentally captured a great shot at a friend’s birthday party. She loved it so much that she made it her profile picture, and as we reminisced about that moment, I realized photography isn’t just about images—it’s about preserving meaningful experiences. From that point on, I started practicing, not just to take beautiful photos, but to capture emotions and stories.
                                                  </p>
                       <p>
                       Over time, photography became my biggest hobby and even helped me connect with new people. This creative journey has shaped how I approach both photography and software development—fostering attention to detail, problem-solving, and the ability to create experiences that truly resonate with people.

                       </p>
                       
                        <p>
                        Additionally, working in a fast-paced Canadian retail environment has been an invaluable learning experience. As my first job in Canada, it may have been a minimum-wage role, but it taught me far more than just day-to-day tasks. I learned how to collaborate in a professional setting, where results often take precedence over emotions, and I gained a deeper sense of involvement in Canadian society. Navigating different work dynamics and communicating effectively with coworkers under pressure has strengthened my adaptability—an essential skill in both the workplace and software development.
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
                        alt="Portrait Photo of Shuli Wang"
                        className="image-portrait"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;