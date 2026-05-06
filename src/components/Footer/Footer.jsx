import './Footer.css';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p>{year} MyPortfolio. Built with React & Vite.</p>
            <div className="footer__links">
                <a href="#">Github</a>
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
            </div>
        </footer>
    );
}

export default Footer;