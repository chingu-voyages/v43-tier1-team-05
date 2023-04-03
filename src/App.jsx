import { useState } from "react";
import MadlibForm from "./components/MadlibForm";
import Modal from "./components/Modal";
import "./App.css";
// Router import
import { Route, Routes, Link } from "react-router-dom";
//

// Pages for all 12 Easy stories //
import Easy1 from "./pagesEasy/Easy1";
import Easy2 from "./pagesEasy/Easy2";
import Easy3 from "./pagesEasy/Easy3";
import Easy4 from "./pagesEasy/Easy4";
import Easy5 from "./pagesEasy/Easy5";
import Easy6 from "./pagesEasy/Easy6";
import Easy7 from "./pagesEasy/Easy7";
import Easy8 from "./pagesEasy/Easy8";
import Easy9 from "./pagesEasy/Easy9";
import Easy10 from "./pagesEasy/Easy10";
import Easy11 from "./pagesEasy/Easy11";
import Easy12 from "./pagesEasy/Easy12";
//

function App() {
	const [text, setText] = useState({
		adjective: "",
		noun: "",
		bodyPart: "",
		food: "",
		number: "",
		colour: "",
		animal: "",
		year: "",
		adverb: "",
		verb: "",
		place: "",
		fruit: "",
		name: "",
		pun: "",
	});
	const [active, setActive] = useState(false);
	const [gameScreen, setGameScreen] = useState(false);

	function getTextInput(event) {
		const name = event.target.name;
		console.log(event.target.value);
		if (name === "adjective") {
			setText((prev) => ({ ...prev, adjective: [event.target.value] }));
		} else if (name === "noun") {
			setText((prev) => ({ ...prev, noun: [event.target.value] }));
		} else if (name === "food") {
			setText((prev) => ({ ...prev, food: [event.target.value] }));
		} else if (name === "bodyPart") {
			setText((prev) => ({ ...prev, bodyPart: [event.target.value] }));
		} else if (name === "number") {
			setText((prev) => ({ ...prev, number: [event.target.value] }));
		} else if (name === "colour") {
			setText((prev) => ({ ...prev, colour: [event.target.value] }));
		} else if (name === "animal") {
			setText((prev) => ({ ...prev, animal: [event.target.value] }));
		} else if (name === "year") {
			setText((prev) => ({ ...prev, year: [event.target.value] }));
		} else if (name === "adverb") {
			setText((prev) => ({ ...prev, adverb: [event.target.value] }));
		} else if (name === "verb") {
			setText((prev) => ({ ...prev, verb: [event.target.value] }));
		} else if (name === "place") {
			setText((prev) => ({ ...prev, place: [event.target.value] }));
		} else if (name === "fruit") {
			setText((prev) => ({ ...prev, fruit: [event.target.value] }));
		} else if (name === "name") {
			setText((prev) => ({ ...prev, name: [event.target.value] }));
		} else if (name === "pun") {
			setText((prev) => ({ ...prev, pun: [event.target.value] }));
		}
		// verb conditional
	}

	function getStory() {
		setActive((prev) => !prev);
	}

	function StartGameScreenButton() {
		setGameScreen((prev) => !prev);
		console.log(gameScreen);
	}

	return (
		<div className="App">
			{!gameScreen && <Modal handleclickgamescreen={StartGameScreenButton} />}
			{gameScreen && (
				<>
					{" "}
					{/* <nav>
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
								<Link to="madlib">Madlib Form</Link>
							</li>
						</ul>
					</nav> */}
					<Routes>
						<Route
							path="/"
							element={
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
											<Link to="madlib">Madlib Form</Link>
										</li>
									</ul>
								</nav>
							}
						/>
						<Route
							path="/easyStory1"
							element={
								<Easy1
									active={active}
									adjective={text.adjective}
									colour={text.colour}
									food={text.food}
									bodyPart={text.bodyPart}
									number={text.number}
									animal={text.animal}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory2"
							element={
								<Easy2
									active={active}
									year={text.year}
									adjective={text.adjective}
									number={text.number}
									bodyPart={text.bodyPart}
									food={text.food}
									noun={text.noun}
									verb={text.verb}
									adverb={text.adverb}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory3"
							element={
								<Easy3
									active={active}
									place={text.place}
									adjective={text.adjective}
									noun={text.noun}
									number={text.number}
									bodyPart={text.bodyPart}
									food={text.food}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory4"
							element={
								<Easy4
									active={active}
									adjective={text.adjective}
									verb={text.verb}
									place={text.place}
									number={text.number}
									bodyPart={text.bodyPart}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory5"
							element={
								<Easy5
									active={active}
									adjective={text.adjective}
									noun={text.noun}
									place={text.place}
									verb={text.verb}
									adverb={text.adverb}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory6"
							element={
								<Easy6
									active={active}
									adjective={text.adjective}
									place={text.place}
									fruit={text.fruit}
									verb={text.verb}
									number={text.number}
									bodyPart={text.bodyPart}
									// girlie stop forgetting to add the dang input handler freaking heck.
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory7"
							element={
								<Easy7
									active={active}
									name={text.name}
									adjective={text.adjective}
									place={text.place}
									noun={text.noun}
									adverb={text.adverb}
									verb={text.verb}
									getTextInput={getTextInput}
									// note to self; you just closed the link you silly goat; sleep, maybe? no reason to have closed that window at ALL.
								/>
							}
						/>
						<Route
							path="easyStory8"
							element={
								<Easy8
									active={active}
									adjective={text.adjective}
									animal={text.animal}
									verb={text.verb}
									adverb={text.adverb}
									number={text.number}
									bodyPart={text.bodyPart}
									food={text.food}
									pun={text.pun}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory9"
							element={
								<Easy9
									active={active}
									adjective={text.adjective}
									place={text.place}
									noun={text.noun}
									verb={text.verb}
									adverb={text.adverb}
									number={text.number}
									bodyPart={text.bodyPart}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory10"
							element={
								<Easy10
									active={active}
									verb={text.verb}
									adjective={text.adjective}
									place={text.place}
									name={text.name}
									noun={text.noun}
									adverb={text.adverb}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory11"
							element={
								<Easy11
									active={active}
									name={text.name}
									adjective={text.adjective}
									verb={text.verb}
									adverb={text.adverb}
									number={text.number}
									bodyPart={text.bodyPart}
									animal={text.animal}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory12"
							element={
								<Easy12
									active={active}
									name={text.name}
									verb={text.verb}
									adjective={text.adjective}
									place={text.place}
									noun={text.noun}
									adverb={text.adverb}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="madlib"
							element={
								<MadlibForm
									active={active}
									adjective={text.adjective}
									noun={text.noun}
									food={text.food}
									bodyPart={text.bodyPart}
									number={text.number}
									getTextInput={getTextInput}
								/>
							}
						/>
					</Routes>
					<button onClick={() => getStory()}>Get story</button>
					<button onClick={() => StartGameScreenButton()}>New story!</button>
				</>
			)}
		</div>
	);
}

export default App;
