import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

//Routes
import Home from "./pages/Home";
import About from "./pages/About";

//Layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path="/"
				element={<RootLayout />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="about"
					element={<About />}
				/>
				<Route
					path="help"
					element={<HelpLayout />}
				>
					<Route path="faq" />
					<Route path="contact" />
				</Route>
			</Route>,
		),
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
