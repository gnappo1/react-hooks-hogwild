import HogDisplay from "./HogDisplay"


const Hogs = ({hogList}) => {
    
    const mappedHogs = hogList.map(hog => <HogDisplay key={hog.name} hogObj={hog} />)

    return (
        <>{mappedHogs}</>
    )
}

export default Hogs