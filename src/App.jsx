import { createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Root from "./routes/Root";
import { RouterProvider } from "react-router-dom";
import Register from "./routes/Register";
import Contact from "./routes/Contact";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { AnimatePresence } from "framer-motion";
import { Router } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const onPageLoad = () => {
			setIsLoaded(true);
		};
		// Check if the page has already loaded
		if (document.readyState === "complete") {
			onPageLoad();
		} else {
			window.addEventListener("load", onPageLoad);
			// Remove the event listener when component unmounts
			return () => window.removeEventListener("load", onPageLoad);
		}
	}, []);

	if (!isLoaded) {
		return <Loading />;
	}

	return (
		<>
			<Header />
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route index element={<Root />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;
