import React from "react";
import "../App.css";

const Easy5 = ({
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
			<h2>Story 5</h2>
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
				Once upon a time, there was a <span>{adjective}</span>{" "}
				<span>{noun}</span> that lived in a <span>{adjective}</span>{" "}
				<span>{place}</span>. One day, it <span>{verb}</span>{" "}
				<span>{adverb}</span> and became very <span>{adjective}</span>.
			</p>
			<button onClick={() => getStory()}>Get story</button>
			<button onClick={() => resetForm()}>
				{" "}
				<Link to="/stories">New Story!</Link>{" "}
			</button>
		</div>
	);
};

export default Easy5;
