import './Header.css';

function Header() {
    return (
        <header className='header'>
            <div className="header__brand">
                <h1>My Portfolio</h1>
            </div>
            <nav className="header__nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;