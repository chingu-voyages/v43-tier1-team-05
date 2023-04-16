import React from "react";
import "../App.css";

const MadlibForm = ({
	adjective,
	noun,
	food,
	bodyPart,
	number,
	getTextInput,
	active,
}) => {
	const style = {
		color: active ? "black" : "transparent",
	};

	return (
		<div className="story">
			<h2>Story 13</h2>
			<input
				type="text"
				name="adjective"
				placeholder="Adjective eg. 'Sweet' "
				onChange={(event) => getTextInput(event)}
			/>

			<input
				type="text"
				name="noun"
				placeholder="Noun"
				value={noun}
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

			<p className="story-text" style={style}>
				On a space station orbiting a distant planet, there was a{" "}
				<span>{adjective}</span> <span>{noun}</span> that loved to cook. It had{" "}
				<span>{number}</span> <span>{bodyPart}</span>s and always carried a{" "}
				<span>{adjective}</span> <span>{food}</span> with it, just in case it
				needed inspiration for a new recipe.
			</p>
		</div>
	);
};

export default MadlibForm;
