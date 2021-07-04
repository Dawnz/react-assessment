import { useState } from "react";

export default function SortComponent({ setSelected }) {
    const categories = ["Name", "Homeworld", "Species", "Vehicle Count", "Starship Count"]

    const categoryHandler = (event) => {
        // console.log(event.target.value);
        event.target.value === "Vehicle Count" ? setSelected('vehicles') :
            event.target.value === "Starship Count" ? setSelected('starships') :
                setSelected(event.target.value.toLowerCase());
    };
    return (
        <select
            id="Categories"
            onChange={categoryHandler}
        // value={selected || fields[0]}
        >
            {categories.map((category, index) => (
                <option key={index} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
}