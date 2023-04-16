import { useState, useEffect } from "react";
import MadlibForm from "./components/MadlibForm";
import Modal from "./components/Modal";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
// Router import
import { Route, Routes, Link, useLocation } from "react-router-dom";
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
// Time need  + time doesn't have = this is it.

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

	let location = useLocation();
	useEffect(() => {
		resetForm();
	}, [location]);

	function getTextInput(event) {
		const { name, value } = event.target;
		setText((prevText) => ({ ...prevText, [name]: value }));
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
			<Header />
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
									getStory={getStory}
									resetForm={resetForm}
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
									getStory={getStory}
									resetForm={resetForm}
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
									getStory={getStory}
									resetForm={resetForm}
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
									getStory={getStory}
									resetForm={resetForm}
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
									getStory={getStory}
									resetForm={resetForm}
									active={active}
									{...text}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory7"
							element={
								<Easy7
									getStory={getStory}
									resetForm={resetForm}
									active={active}
									{...text}
									getTextInput={getTextInput}
								/>
							}
						/>
						<Route
							path="easyStory8"
							element={
								<Easy8
									getStory={getStory}
									resetForm={resetForm}
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
									getStory={getStory}
									resetForm={resetForm}
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
									getStory={getStory}
									resetForm={resetForm}
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
									getStory={getStory}
									resetForm={resetForm}
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
									getStory={getStory}
									resetForm={resetForm}
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
									getStory={getStory}
									resetForm={resetForm}
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
			<Footer />
		</div>
	);
}

export default App;
