import { useState } from "react";
import MadlibForm from "./components/MadlibForm";
import Modal from "./components/Modal";
import "./App.css";
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
					<MadlibForm
						active={active}
						adjective={text.adjective}
						noun={text.noun}
						food={text.food}
						bodyPart={text.bodyPart}
						number={text.number}
						getTextInput={getTextInput}
					/>
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
					<Easy4
						active={active}
						adjective={text.adjective}
						verb={text.verb}
						place={text.place}
						number={text.number}
						bodyPart={text.bodyPart}
						getTextInput={getTextInput}
					/>
					<Easy5
						active={active}
						adjective={text.adjective}
						noun={text.noun}
						place={text.place}
						verb={text.verb}
						adverb={text.adverb}
						getTextInput={getTextInput}
					/>
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
					<button onClick={() => getStory()}>Get story</button>
					<button onClick={() => StartGameScreenButton()}>New story!</button>
				</>
			)}
		</div>
	);
}

export default App;
