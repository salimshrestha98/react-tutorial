import logo from '../logo.svg';

function Header() {
    return (
        <header>
            <nav className="nav">
                <img
                    src={logo}
                />
                <h4>My Site Title</h4>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;