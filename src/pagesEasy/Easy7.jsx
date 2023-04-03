import React from "react";
import "../App.css";

const Easy7 = ({
	name,
	adjective,
	place,
	noun,
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
				name="name"
				placeholder="Name"
				onChange={(event) => getTextInput(event)}
			/>

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
				name="adverb"
				placeholder="adverb"
				onChange={(event) => getTextInput(event)}
			/>

			<input
				type="text"
				name="verb"
				placeholder="Verb"
				onChange={(event) => getTextInput(event)}
			/>

			<p style={style}>
				"<span>{name}</span> loved to explore the <span>{adjective}</span>{" "}
				<span>{place}</span> and one day discovered a <span>{noun}</span>. It
				was <span>{adverb}</span> <span>{adjective}</span> and loved to{" "}
				<span>{verb}</span>.",
			</p>
		</div>
	);
};

export default Easy7;