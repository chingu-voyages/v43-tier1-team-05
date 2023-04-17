import logo from "./logo.png";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="Header">
			<Link to="/">
				<img
					src={logo}
					className="Header-logo"
					alt="logo"
				/>
			</Link>

			<h1 className="Header-title">MadLibs</h1>
			<a
				className="Header-link"
				href="https://github.com/chingu-voyages/v43-tier1-team-05/tree/main"
				target="blank"
			>
				About MadLibs
			</a>
		</header>
	);
}
