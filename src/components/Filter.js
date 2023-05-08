import { useState } from "react"

const Filter = ({handleFilter}) => {

    return (
        <div>
            <select name="filter" onChange={handleFilter}>
                <option value="">Select an option</option>
                <option value="greased">Greased</option>
                <option value="nonGreased">Non-Greased</option>
            </select>
            <select name="sort" onChange={handleFilter}>
                <option value="">Sort By</option>
                <option value="name">Name</option>
                <option value="weight">Weight</option>
            </select>

        </div>
    )
}

export default Filter