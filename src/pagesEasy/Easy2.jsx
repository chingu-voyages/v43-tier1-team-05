import React from "react";
import "../App.css";

const Easy2 = ({
	adjective,
	food,
	bodyPart,
	number,
	year,
	adverb,
	verb,
	getTextInput,
	active,
}) => {
	const style = {
		color: active ? "black" : "transparent",
	};

	return (
		<div className="story">
			<input
				type="text"
				name="adjective"
				placeholder="Adjective"
				onChange={(event) => getTextInput(event)}
			/>

			<input
				type="text"
				name="year"
				placeholder="Year"
				onChange={(event) => getTextInput(event)}
			/>

			<input
				type="text"
				name="adverb"
				placeholder="Adverb"
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

			<input
				type="text"
				name="verb"
				placeholder="Verb"
				onChange={(event) => getTextInput(event)}
			/>

			<p style={style}>
				In the year {year}, a {adjective} {noun} from the future arrived. It had{" "}
				{number} {bodyPart}s and loved to eat {food} that didnt exist yet. It
				was on a mission to {verb} {adverb}.
			</p>
		</div>
	);
};

export default Easy2;
