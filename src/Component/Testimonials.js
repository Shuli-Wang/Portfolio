import "./Testimonials.css";

function Testimonials() {
    return (
        <div className="Testimonials">
            <div className="container-basic" style={{justifyContent:'start',  minHeight:'400px', background:'linear-gradient(to bottom, #BEC8D2 0%, white 100%)' }}>
                <h2 style={{marginTop:'200px'}}>Birds of a Feather Flock Together</h2>
                <h1>Hear From Those Who Know Me</h1>
            </div>
            <div className="container-basic" style={{ alignItems: 'flex-start' }}>
                <div className="container-testimonials">
                    <p style={{ fontWeight: '500' }}>- Blandina, Coworker</p>
                    <p style={{ marginTop: '6px' }}>"It was a pleasure working with Shuli. She’s dependable — always on time, fully prepared, and never misses a beat. Her sense of responsibility and positive attitude make her a great teammate to have in the workplace."</p>
                </div>
                <div className="container-testimonials-right">
                    <p style={{ marginTop: '40px', fontWeight: '500' }}>- Gehao, Professor</p>
                    <p style={{ marginTop: '6px' }}>"I taught Shuli in a Machine Learning course, and she stood out as a quick learner with a lot of curiosity. She actively participated in discussions and wasn’t afraid to ask questions when she didn’t understand something. She’s the kind of learner who grows consistently with every challenge."</p>
                </div>
                <div className="container-testimonials">
                    <p style={{ marginTop: '40px', fontWeight: '500' }}>- Dylan, Classmate</p>
                    <p style={{ marginTop: '6px' }}>"I had the opportunity to collaborate with Shuli on several school projects, and she is a good teammate. She listens attentively to others' ideas, contributes thoughtfully, and takes initiative to keep the team on track. She’s the kind of person who makes teamwork feel natural and effective."</p>
                </div>
                <div className="container-testimonials-right">
                    <p style={{ marginTop: '40px', fontWeight: '500' }}>- Yuhan, Friend from middle school</p>
                    <p style={{ marginTop: '6px' }}>"I’ve known Shuli for more than 10 years, and one thing that always stands out is how kind and thoughtful she is. She’s someone you can count on when you need help, and she always tries to be there for the people around her. Her honesty and easy-going nature make her a great friend and a trustworthy person."</p>
                </div>
                <div className="container-basic" style={{minHeight: '160px'}}>
                <h2>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-nAvoNumTTxkiQTKnbzBXvLsLNxqo0CSlfU5nEwwMk5B4bQ/viewform?usp=header">
                        CLICK&nbsp;HERE</a> to share your thoughts!</h2>
                        </div>
            </div>

        </div>
    );
}

export default Testimonials;