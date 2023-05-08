import PorkerCard from "./PorkerCard"

function Porkers({hogs, option, sortBy}) {
    const filteredHogs = hogs.filter(hog => {
        if (option === "") {
            return true
        } else if (option === "greased") {
            return hog.greased
        } else {
            return !hog.greased
        }
        // const optionToBool = option === "greased" ? true : false
        // return !option ? true : optionToBool === hog.greased
    })

    const compareHogs = (hog1, hog2) => {
        if (sortBy === "name") {
            const nameA = hog1.name.toUpperCase(); // ignore upper and lowercase
            const nameB = hog2.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0
        } else {
            return hog2.weight - hog1.weight
        }
    }

    const sortedHogs = filteredHogs.sort(compareHogs)

    const mappedHogs = sortedHogs.map(hog => <PorkerCard key={hog.name} hog={hog} />)

    return <div className="container">{mappedHogs}</div>
}

export default Porkers