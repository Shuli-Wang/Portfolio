import "./Testimonials.css";

function Testimonials() {
    return (
        <div className="Testimonials">
            <div className="container-basic" style={{ minHeight: '50vh' }}>
                <h2>Birds of a Feather Flock Together</h2>
                <h1>Hear From Those Who Know Me</h1>
            </div>
            <div className="container-basic" style={{ alignItems: 'flex-start' }}>

                <div className="container-testimonials">
                    <p style={{ fontWeight: 'bold' }}>- Blandina, Coworker</p>
                    <p style={{ marginTop: '2%' }}>"It was a pleasure working with Shuli. She’s dependable — always on time, fully prepared, and never misses a beat. Her sense of responsibility and positive attitude make her a great teammate to have in the workplace."</p>
                </div>
                <div className="container-testimonials-right">
                    <p style={{ fontWeight: 'bold' }}>- Dylan, Classmate</p>
                    <p style={{ marginTop: '2%' }}>"I had the opportunity to collaborate with Shuli on several school projects, and she is a good teammate. She listens attentively to others' ideas, contributes thoughtfully, and takes initiative to keep the team on track. She’s the kind of person who makes teamwork feel natural and effective."</p>

                </div>
                <div className="container-testimonials">
                    <p style={{ fontWeight: 'bold' }}>- Yuhan, Friend from middle school</p>
                    <p style={{ marginTop: '2%' }}>"I’ve known Shuli for more than 10 years, and one thing that always stands out is how kind and thoughtful she is. She’s someone you can count on when you need help, and she always tries to be there for the people around her. Her honesty and easy-going nature make her a great friend and a trustworthy person."</p>
                </div>
                <div className="container-testimonials-right">
                    <p style={{ fontWeight: 'bold' }}>- Gehao, Professor</p>
                    <p style={{ marginTop: '2%' }}>"I taught Shuli in a Machine Learning course, and she stood out as a quick learner with a lot of curiosity. She actively participated in discussions and wasn’t afraid to ask questions when she didn’t understand something. She’s the kind of learner who grows consistently with every challenge."</p>

                </div>

                <h2 style={{ margin: '10%', marginLeft: 'auto', marginRight: 'auto' }}>

                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-nAvoNumTTxkiQTKnbzBXvLsLNxqo0CSlfU5nEwwMk5B4bQ/viewform?usp=header">
                        Got something to tell? click&nbsp;here! </a></h2>
            </div>

        </div>
    );
}

export default Testimonials;