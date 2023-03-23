import { useState } from "react";
import MadlibForm from "./components/MadlibForm";
import "./App.css";

function App() {
	const [text, setText] = useState("[--user input--]");

	function getTextInput(e) {
		setText(e.target.value);
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
				type={text}
				getTextInput={getTextInput}
			/>
			<button onClick={() => getStory()}>Get story</button>
		</div>
	);
}

export default App;
