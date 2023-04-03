import React from "react";
import "../App.css";

const Easy9 = ({
	adjective,
	place,
	noun,
	verb,
	adverb,
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
			<h2>Story 9</h2>

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
				name="verb"
				placeholder="Verb"
				onChange={(event) => getTextInput(event)}
			/>

			<input
				type="text"
				name="adverb"
				placeholder="adverb"
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
				In the <span>{adjective}</span> <span>{place}</span>, there was a{" "}
				<span>{adjective}</span> <span>{noun}</span> that loved to{" "}
				<span>{verb}</span>. It was <span>{adverb}</span>{" "}
				<span>{adjective}</span> and had <span>{number}</span>{" "}
				<span>{bodyPart}</span>s.
			</p>
		</div>
	);
};

export default Easy9;
