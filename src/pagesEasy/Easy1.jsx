import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

// import ControlButtons from "../components/ControlButtons";

const Easy1 = ({
	adjective,
	food,
	bodyPart,
	number,
	colour,
	animal,
	place,
	getTextInput,
	active,
	getStory,
	resetForm,
}) => {
	const style = {
		color: active ? "black" : "transparent",
	};

	return (
		<div className="story">
			<h2>Story 1</h2>
			<input
				type="text"
				name="adjective"
				placeholder="Adjective"
				onChange={(event) => getTextInput(event)}
			/>

			<input
				type="text"
				name="animal"
				placeholder="Animal"
				onChange={(event) => getTextInput(event)}
			/>

			<input
				type="text"
				name="colour"
				placeholder="Color"
				onChange={(event) => getTextInput(event)}
			/>

			<input
				type="text"
				name="number"
				placeholder="Number"
				onChange={(event) => getTextInput(event)}
			/>

			<input
				type="text"
				name="food"
				placeholder="Food"
				onChange={(event) => getTextInput(event)}
			/>

			<input
				type="text"
				name="bodyPart"
				placeholder="Body Part"
				onChange={(event) => getTextInput(event)}
			/>

			<p style={style}>
				There was a <span>{colour}</span> <span>{animal}</span> that loved to
				eat <span>{food}</span>. It lived in a <span>{adjective}</span>{" "}
				<span> {place}</span> and had <span>{number}</span>{" "}
				<span>{bodyPart}</span>s.
			</p>
			<button onClick={(event) => getStory(event)}>Get story</button>
			<button onClick={(event) => resetForm(event)}>
				{" "}
				<Link to="/stories">New Story!</Link>{" "}
			</button>
		</div>
	);
};

export default Easy1;
