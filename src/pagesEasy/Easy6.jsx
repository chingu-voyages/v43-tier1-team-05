import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Easy6 = ({
	adjective,
	place,
	fruit,
	verb,
	number,
	bodyPart,
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
			<h2>Story 6</h2>
			<input
				type="text"
				name="adjective"
				placeholder="Adjective"
				onChange={(event) => getTextInput(event)}
			/>

			<input
				type="text"
				name="place"
				placeholder="Place"
				onChange={(event) => getTextInput(event)}
			/>

			<input
				type="text"
				name="fruit"
				placeholder="Fruit"
				onChange={(event) => getTextInput(event)}
			/>
			<input
				type="text"
				name="verb"
				placeholder="Verb"
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
				name="bodyPart"
				placeholder="Body Part"
				onChange={(event) => getTextInput(event)}
				// heh -- please dont do this again, thanks, brain cells on their death. Rosebud moment right now. Care.
			/>
			{/* empty space -- lol / i wanna sleep so bad sweet Lord */}
			<p style={style}>
				In the <span>{adjective}</span> <span>{place}</span>, there was a
				magical <span>{adjective}</span> <span>{fruit}</span> that could{" "}
				<span>{verb} </span> <span>{number} </span> <span>{bodyPart}</span>s.
			</p>
			<button onClick={() => getStory()}>Get story</button>
			<button onClick={() => resetForm()}>
				{" "}
				<Link to="/stories">New Story!</Link>{" "}
			</button>
		</div>
	);
};

export default Easy6;
