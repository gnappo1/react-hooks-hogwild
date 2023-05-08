import {useState} from "react";
import Nav from "./Nav";
import Porkers from "./Porkers";
import hogs from "../porkers_data";
import Filter from "./Filter";

function App() {
	const [option, setOption] = useState("");
	const [sortBy, setSortBy] = useState("");

	const handleFilter = (e) => {
		console.log(e.target.value)
		if (e.target.name === 'filter') {
			setOption(e.target.value)
		} else {
			setSortBy(e.target.value)
		}
	}

	return (
		<div className="App">
			<Nav />
			<Filter handleFilter={handleFilter} />
			<Porkers sortBy={sortBy} option={option} hogs={hogs} />
		</div>
	);
}

export default App;
