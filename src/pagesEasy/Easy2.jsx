import React from "react";
import "../App.css";

const Easy2 = ({
	adjective,
	food,
	bodyPart,
	number,
	year,
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
			<h2>Story 2</h2>
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

			<input
				type="text"
				name="noun"
				placeholder="Noun"
				onChange={(event) => getTextInput(event)}
			/>

			<p style={style}>
				In the year<span> {year}</span>, a <span>{adjective}</span>{" "}
				<span>{noun}</span> from the future arrived. It had{" "}
				<span>{number}</span> <span>{bodyPart}</span>s and loved to eat
				<span> {food}</span> that didnt exist yet. It was on a mission to{" "}
				<span>{verb}</span> <span>{adverb}</span>.
			</p>
		</div>
	);
};

export default Easy2;
