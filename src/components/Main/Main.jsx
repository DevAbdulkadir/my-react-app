import './Main.css';
import Card from '../Cards/Card';

function Main() {


    return (
        <main className="main">
            <section className="hero">
                <h2>Welcome to my Portfolio</h2>
                <p>I builf beautiful, fast, and accessible web applications. </p>
                <button className="hero-cta">View My Work</button>
            </section>
            <section className="about" id="about">
                <h3>About Me</h3>
                <p>
                    I am a passionate front-end developer learning React. I love creating clean, component-driven UIs
                </p>
            </section>

            <div className="card-section">
                <Card
                    title="First Title"
                    description="What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                />
                <Card
                    title="Second Title"
                    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
                />
                <Card
                    title="Third Title"
                    description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
                />
            </div>
            
        </main>
    );
}

export default Main;