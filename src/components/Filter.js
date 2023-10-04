import React from 'react'

const Filter = ({toggleSortBy, sortBy}) => {
  return (
    <div>
        <select value={sortBy} onChange={toggleSortBy}>
            <option value="">Select One</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
        </select>
    </div>
  )
}

export default Filter