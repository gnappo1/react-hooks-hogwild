import { useState } from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import PigContainer from "./PigContainer";
import Filter from "./Filter";

function App() {
	const [sortBy, setSortBy] = useState("")

	const toggleSortBy = (e) => {
		const selectedValue = e.target.value
		setSortBy(selectedValue)
	}
	
	return (
		<div className="App">
			<Nav />
			<Filter toggleSortBy={toggleSortBy} sortBy={sortBy}/>
			<PigContainer hogs={hogs} sortBy={sortBy}/>
		</div>
	);
}

export default App;
