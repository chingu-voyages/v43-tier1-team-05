import React from "react";
import "../App.css";

const Easy4 = ({
	adjective,
	verb,
	place,
	number,
	bodyPart,
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
				name="verb"
				placeholder="Verb"
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
				name="number"
				placeholder="Number"
				onChange={(event) => getTextInput(event)}
			/>

			<input
				type="text"
				name="bodyPart"
				placeholder="Body Part"
				onChange={(event) => getTextInput(event)}
			/>

			<p style={style}>
				There was a <span>{adjective}</span> <span>{verb}</span>er that loved to{" "}
				<span>{verb}</span>. It lived in a <span>{adjective}</span>{" "}
				<span>{place}</span> and had<span> {number}</span>{" "}
				<span>{bodyPart}</span>s.
			</p>
		</div>
	);
};

export default Easy4;
