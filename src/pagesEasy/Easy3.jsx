import React from "react";
import "../App.css";

const Easy3 = ({
	place,
	adjective,
	noun,
	number,
	bodyPart,
	food,
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
				name="place"
				placeholder="Place"
				onChange={(event) => getTextInput(event)}
			/>

			<input
				type="text"
				name="noun"
				placeholder="Noun"
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
				In a faraway {place}, there was a {adjective} {noun} that loved to
				explore the galaxy. It had {number} {bodyPart}s and always carried a{" "}
				{adjective} {food} with it, just in case it got hungry..
			</p>
		</div>
	);
};

export default Easy3;
