import { useState } from 'react'

function PorkerCard({hog}) {
    const {name, image, specialty, greased, weight} = hog
    const [isVisible, setIsVisible] = useState(false)

    const handleClick = () => setIsVisible(current => !current)
    
    return (
        <div className="pigTile ui eight wide column" onClick={handleClick}>
            <h3>{name}</h3>
            <img src={image} alt={`Little piggy ${name} that weighs ${weight} lbs`}/>
            <div>{isVisible && (
                <div>
                    <p>Specialty: {specialty}</p>
                    <p>Greased: {greased ? "Yes" : "No"}</p>
                    <p>Highest Medal: {hog['highest medal achieved']}</p>
                    <p>Weight: {weight} lbs</p>
                </div>
            )}</div>
        </div>
    )
}

export default PorkerCard