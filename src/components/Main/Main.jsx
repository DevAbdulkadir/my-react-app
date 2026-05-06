import './Main.css';

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
        </main>
    );
}

export default Main;