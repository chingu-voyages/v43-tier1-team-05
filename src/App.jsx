import { useState } from "react";
import MadlibForm from "./components/MadlibForm";
import Modal from "./components/Modal";
import "./App.css";
import easy from "../../EasyStories";

function App() {
	const [text, setText] = useState({
		adjective: "",
		noun: "",
		bodyPart: "",
		food: "",
		number: "",
	});
	const [active, setActive] = useState(false);
	const [gameScreen, setGameScreen] = useState(false);

	function getTextInput(event) {
		// console.log(text);
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
		}
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
					<button onClick={() => getStory()}>Get story</button>
					<button onClick={() => StartGameScreenButton()}>New story!</button>
				</>
			)}
		</div>
	);
}

export default App;
