import { useState } from "react";
import MadlibForm from "./components/MadlibForm";
import Modal from "./components/Modal";
import "./App.css";
import Easy1 from "./pagesEasy/Easy1";
import Easy2 from "./pagesEasy/Easy2";
import Easy3 from "./pagesEasy/Easy3";

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
					
					
					
					/>
					<button onClick={() => getStory()}>Get story</button>
					<button onClick={() => StartGameScreenButton()}>New story!</button>
				</>
			)}
		</div>
	);
}

export default App;
