import React from "react";
import "../App.css";

const MadlibForm = ({ type, getTextInput, active }) => {
	const style = {
		color: active ? "black" : "transparent",
	};

	return (
		<div className="story">
			<input
				type="text"
				onChange={(event) => getTextInput(event)}
			/>
			<p style={style}>
				Once upon a time, there was a <span>{type}</span> <span>{type}</span>{" "}
				that lived in a <span>{type}</span> <span>{type}</span> One day, it{" "}
				<span>{type}</span> <span>{type}</span> and became very{" "}
				<span>{type}</span>
			</p>
		</div>
	);
};

export default MadlibForm;
