import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Order from "./routes/Order";
import FetchOrder from "./components/FetchOrder";
import Invoice from "./components/Invoice";
import "virtual:windi.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="order" element={<Order />}>
						<Route path=":anime" element={<FetchOrder />} />
					</Route>
				</Route>
				<Route
					path="*"
					element={
						<main style={{ padding: "1rem" }}>
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
