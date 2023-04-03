import React from "react";
import "../App.css";

const Easy8 = ({
	adjective,
	animal,
	verb,
	adverb,
	number,
	bodyPart,
	food,
	pun,
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
				name="animal"
				placeholder="Animal"
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
				name="bodyPart"
				placeholder="Body Part"
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
				name="pun"
				placeholder="Pun"
				onChange={(event) => getTextInput(event)}
			/>

			<p style={style}>
				In a world full of <span>{adjective}</span> <span>{animal}</span>s,
				there was one that stood out. It loved to <span>{verb}</span>{" "}
				<span>{adverb} </span> and had <span> {number} </span>
				<span> {bodyPart}</span>
				s. Its favorite<span> {food}</span> was <span>{pun}</span>.
			</p>
		</div>
	);
};

export default Easy8;
