import { useState } from "react"

const HogDisplay = (props) => {
    const [displayDetails, setDisplayDetails] = useState(false)

    const toggleDetails = () => {
        setDisplayDetails(!displayDetails)
        // setDisplayDetails(currentValue => !currentValue)
    }
    
    return (
        <div onClick={toggleDetails}>
            <h2>{props.hogObj.name}</h2>
            <img src={props.hogObj.image } alt={props.hogObj.name}/>
            {displayDetails ? (
                <>
                    <p>Specialty: {props.hogObj.specialty}</p>
                    <p>Greased: {props.hogObj.greased ? "Yes": "No"}</p>
                    <p>Weight: {props.hogObj.weight} lbs</p>
                    <p>Highest Medal: {props.hogObj["highest medal achieved"]}</p>
                </>
            ) : null}
        </div>
    )
}

export default HogDisplay