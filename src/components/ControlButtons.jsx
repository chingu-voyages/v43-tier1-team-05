import React from "react";
import { Link } from "react-router-dom";

function ControlButtons() {
	return (
		<div>
			<button onClick={() => getStory()}>Get story</button>
			<button onClick={() => resetForm()}>
				{" "}
				<Link to="/stories">New Story!</Link>{" "}
			</button>
		</div>
	);
}

export default ControlButtons;
