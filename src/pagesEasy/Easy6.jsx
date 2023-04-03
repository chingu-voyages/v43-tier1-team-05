import React from "react";
import "../App.css";

const Easy6 = ({
	adjective,
	noun,
	place,
	verb,
	adverb,
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
				name="noun"
				placeholder="Noun"
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

			<p style={style}>
				In the <span>{adjective}</span> <span>{place}</span>, there was a
				magical <span>{adjective}</span> <span>{fruit}</span> that could{" "}
				<span>{verb} </span> <span>{number} </span> <span>{bodyPart}</span>s.
			</p>
		</div>
	);
};

export default Easy6;
