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
import StoryNavEasy from "./components/StoryNavEasy";
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

	function resetForm() {
		setActive(false);
		setText({
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
	}

	function getStory() {
		setActive((prev) => !prev);
	}

	function StartGameScreenButton() {
		setGameScreen((prev) => !prev);
		setActive(false);
		setText({
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
	}

	return (
		<div className="App">
			{!gameScreen && <Modal handleclickgamescreen={StartGameScreenButton} />}
			{gameScreen && (
				<>
					{" "}
					<Routes>
						<Route
							path="/stories"
							element={<StoryNavEasy />}
						/>
						<Route
							path="/easyStory1"
							element={
								<Easy1
									getStory={getStory}
									resetForm={resetForm}
									active={active}
									{...text}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory2"
							element={
								<Easy2
									active={active}
									{...text}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory3"
							element={
								<Easy3
									active={active}
									{...text}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory4"
							element={
								<Easy4
									{...text}
									active={active}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory5"
							element={
								<Easy5
									active={active}
									{...text}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory6"
							element={
								<Easy6
									active={active}
									{...text}
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
									{...text}
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
									{...text}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory9"
							element={
								<Easy9
									active={active}
									{...text}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory10"
							element={
								<Easy10
									active={active}
									{...text}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory11"
							element={
								<Easy11
									active={active}
									{...text}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory12"
							element={
								<Easy12
									active={active}
									{...text}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="madlib"
							element={
								<MadlibForm
									active={active}
									{...text}
									getTextInput={getTextInput}
								/>
							}
						/>
					</Routes>
					{/* <button onClick={() => getStory()}>Get story</button>
					<button onClick={() => resetForm()}>
						{" "}
						<Link to="/stories">New Story!</Link>{" "}
					</button> */}
				</>
			)}
		</div>
	);
}

export default App;
