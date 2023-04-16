import React from "react";
import { Link } from "react-router-dom";

function StoryNavEasy() {
	return (
		<>
			<nav>
				<ul className="story-list">
					<li className="story-box-links">
						<Link to="/easyStory1">Story 1</Link>
					</li>
					<li className="story-box-links">
						<Link to="/easyStory2">Story 2</Link>
					</li>
					<li className="story-box-links">
						<Link to="/easyStory3">Story 3</Link>
					</li>
					<li className="story-box-links">
						<Link to="/easyStory4">Story 4</Link>
					</li>
					<li className="story-box-links">
						<Link to="/easyStory5">Story 5 </Link>
					</li>
					<li className="story-box-links">
						<Link to="/easyStory6">Story 6</Link>
					</li>
					<li className="story-box-links">
						<Link to="/easyStory7">Story 7</Link>
					</li>
					<li className="story-box-links">
						<Link to="/easyStory8">Story 8</Link>
					</li>
					<li className="story-box-links">
						<Link to="/easyStory9">Story 9</Link>
					</li>
					<li className="story-box-links">
						<Link to="/easyStory10">Story 10</Link>
					</li>
					<li className="story-box-links">
						<Link to="/easyStory11">Story 11</Link>
					</li>
					<li className="story-box-links">
						<Link to="/easyStory12">Story 12</Link>
					</li>
					<li className="story-box-links">
						<Link to="madlib">Story 13</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default StoryNavEasy;
