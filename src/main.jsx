import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<NavigationBar />
			<App />
		</BrowserRouter>
		<Footer />
	</React.StrictMode>
);
