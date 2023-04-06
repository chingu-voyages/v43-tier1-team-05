import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Modal({ handleclickgamescreen }) {
	return (
		<div>
			<h1>Madlib Game</h1>
			<>
				<h2>Rules of the Land</h2>
				<ul>
					<li>Fill in the blank spaces with the appropriate word type.</li>
					<li>Have fun and be as creative as you can.</li>
					<li>No losers...all winners!!</li>
				</ul>
			</>
			<button onClick={() => handleclickgamescreen()}>
				<Link to="/stories">Go to stories page!</Link>
			</button>
		</div>
	);
}

export default Modal;
