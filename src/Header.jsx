import logo from './logo.png';

export default function Header () {
    return (
        <header className="Header">
            <img src={logo} className="Header-logo" alt="logo" />
            <h1 className="Header-title">
            MadLibs
            </h1>
            <a className="Header-link" href="https://github.com/chingu-voyages/v43-tier1-team-05/tree/main" target="blank">
            About MadLibs
            </a>
        </header>
    )
}