import { useState } from "react"
const PigTile = ({name, image, specialty, weight, greased, "highest medal achieved": medal}) => {
  const [showDetails, setShowDetails] = useState(false)

  const handleToggleDetails = () => {
    setShowDetails(currentShowDetails => !currentShowDetails)
  }

  return (
    <div className="pigTile" onClick={handleToggleDetails}>
        <h3>{name}</h3>
        <img src={image} alt={name} className="minPigTile maxPigTile"/>
        {showDetails && <>
            <br />
            <span>Specialty: {specialty}</span><br />
            <span>Weight: {weight}lbs</span><br />
            <span>Medal: {medal}</span><br />
            <span>{greased ? "Greased" : "Non-Greased"}</span><br />
          </>
        }
    </div>
  )
}

export default PigTile