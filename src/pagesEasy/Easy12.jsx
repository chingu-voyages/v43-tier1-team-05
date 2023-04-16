import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Easy12 = ({
	name,
	verb,
	adjective,
	place,
	noun,
	adverb,
	getTextInput,
	active,
	getStory,
	resetForm,
}) => {
	const style = {
		color: active ? "black" : "transparent",
	};

	return (
		<div className="story">
			<h2>Story 12</h2>
			<input
				type="text"
				name="name"
				placeholder="Name"
				onChange={(event) => getTextInput(event)}
			/>
			{/* ***break*** */}
			<input
				type="text"
				name="verb"
				placeholder="Verb"
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
			/>{" "}
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
			<p style={style}>
				<span>{name}</span> loved to <span>{verb}</span> in the{" "}
				<span>{adjective}</span> <span>{place}</span>. One day, they discovered
				a{" "}
				<span>
					{adjective} {noun}
				</span>{" "}
				that was <span>{adverb}</span> <span>{verb}</span>ing.
			</p>
			<button onClick={() => getStory()}>Get story</button>
			<button onClick={() => resetForm()}>
				{" "}
				<Link to="/stories">New Story!</Link>{" "}
			</button>
		</div>
	);
};

export default Easy12;
