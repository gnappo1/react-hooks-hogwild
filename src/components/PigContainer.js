import PigTile from "./PigTile"

const PigContainer = ({hogs, sortBy}) => {
    const mappedHogs = hogs
    .sort((a, b) => {
        if (sortBy) {
            if (sortBy === "weight") {
                return b.weight - a.weight
            } else {
                debugger
                const aName = a.name.toLowerCase()
                const bName = b.name.toLowerCase()
                if (aName < bName) {
                    return 1
                } else if (aName > bName) {
                    return -1
                }
                return 0
            }
        }
        // return a + b
    })
    .map(hog => <PigTile key={hog.name} {...hog} />)


    return (
        <div className="ui grid container">
            {mappedHogs}
        </div>
    )
}

export default PigContainer