import { useState } from "react";
import MadlibForm from "./components/MadlibForm";
import "./App.css";

function App() {
	const [text, setText] = useState({
		adjective: "",
		noun: "",
		bodyPart: "",
		food: "",
		number: "",
	});
	const [active, setActive] = useState(false);

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
		console.log(active);
	}

	return (
		<div className="App">
			<h1>Test+App</h1>
			<p className="exclude">Testing the blur effect on story.</p>
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
		</div>
	);
}

export default App;
