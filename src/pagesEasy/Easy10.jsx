import React from "react";
import "../App.css";

const Easy10 = ({
	verb,
	adjective,
	place,
	name,
	noun,
	adverb,
	getTextInput,
	active,
}) => {
	const style = {
		color: active ? "black" : "transparent",
	};

	return (
		<div className="story">
			<h2>Story 10</h2>

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
			/>
			{/* blank space  */}
			<input
				type="text"
				name="name"
				placeholder="Name"
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

			<p style={style}>
				<span>{verb}</span>ing through the <span>{adjective}</span>{" "}
				<span>{place}</span>, <span>{name}</span> saw a <span>{adjective}</span>{" "}
				<span>{noun}</span>. It was <span>{adverb}</span> <span>{verb}</span>
				ing.
			</p>
		</div>
	);
};

export default Easy10;
