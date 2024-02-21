import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Hogs from "./Hogs";
console.log("🚀 ~ hogs:", hogs)

function App() {


	return (
		<div className="App">
			<Nav />
			<Hogs hogList={hogs} />
		</div>
	);
}

export default App;
