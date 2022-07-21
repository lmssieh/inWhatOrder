import { useState } from "react";
import FetchOrder from "./components/FetchOrder";
import AppHeader from "./components/AppHeader";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App bg-gray-200 py-2 h-full">
			<AppHeader />
		</div>
	);
}

export default App;
