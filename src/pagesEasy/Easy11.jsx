import React from "react";
import "../App.css";

const Easy11 = ({
	name,
	adjective,
	verb,
	adverb,
	number,
	animal,
	bodyPart,
	getTextInput,
	active,
}) => {
	const style = {
		color: active ? "black" : "transparent",
	};

	return (
		<div className="story">
			<h2>Story 11</h2>
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
				name="animal"
				placeholder="Animal"
				onChange={(event) => getTextInput(event)}
			/>
			<input
				type="text"
				name="verb"
				placeholder="Verb"
				onChange={(event) => getTextInput(event)}
			/>{" "}
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
				<span>{name}</span> had a <span>{adjective}</span> <span>{animal}</span>{" "}
				that loved to <span>{verb}</span>. It was <span>{adverb}</span>{" "}
				<span>{adjective}</span> and had <span>{number}</span>{" "}
				<span>{bodyPart}</span>s.
			</p>
		</div>
	);
};

export default Easy11;
