import React from "react";
import { Link } from "react-router-dom";

function StoryNavEasy() {
	return (
		<>
			<div className="stories-menu">
				<div className="stories-links">
					<div className="home-link">
						<Link
							className="nav-link"
							to="/"
						>
							Home
						</Link>
					</div>
					<div className="stories-link">
						<Link
							className="nav-link"
							to="/stories"
						>
							Stories
						</Link>
					</div>
				</div>
			</div>
			<nav>
				<ul className="story-list">
					<li className="story-box-links item-a">
						<Link to="/easyStory1">Story 1</Link>
					</li>
					<li className="story-box-links item-b">
						<Link to="/easyStory2">Story 2</Link>
					</li>
					<li className="story-box-links item-c">
						<Link to="/easyStory3">Story 3</Link>
					</li>
					<li className="story-box-links item-d">
						<Link to="/easyStory4">Story 4</Link>
					</li>
					<li className="story-box-links item-e">
						<Link to="/easyStory5">Story 5 </Link>
					</li>
					<li className="story-box-links item-f">
						<Link to="/easyStory6">Story 6</Link>
					</li>
					<li className="story-box-links item-g">
						<Link to="/easyStory7">Story 7</Link>
					</li>
					<li className="story-box-links item-h">
						<Link to="/easyStory8">Story 8</Link>
					</li>
					<li className="story-box-links item-i">
						<Link to="/easyStory9">Story 9</Link>
					</li>
					<li className="story-box-links item-j">
						<Link to="/easyStory10">Story 10</Link>
					</li>
					<li className="story-box-links item-k">
						<Link to="/easyStory11">Story 11</Link>
					</li>
					<li className="story-box-links item-l">
						<Link to="/easyStory12">Story 12</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default StoryNavEasy;
