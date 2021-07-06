import { useState } from "react";
import styled from "styled-components";


const SortDiv = styled.div`
width: 100%;
/* border: 1px solid blue; */
.category-select{
    height: 32px;
/* width: 139px; */
border-radius: 6px;
border-color: #B8B8B8;
/* background-color: black; */
}

.category-options{
    
    
}


`;

export default function SortComponent({ setSelectedSort }) {
    const categories = ["Name", "Homeworld", "Species", "Vehicle Count", "Starship Count"]

    const categoryHandler = (event) => {
        // console.log(event.target.value);
        event.target.value === "Vehicle Count" ? setSelectedSort('vehicles') :
            event.target.value === "Starship Count" ? setSelectedSort('starships') :
                setSelectedSort(event.target.value.toLowerCase());
    };
    return <SortDiv>
        <select
            className="category-select"
            id="Categories"
            onChange={categoryHandler}
        // value={selected || fields[0]}
        >
            {categories.map((category, index) => (
                <option className="category-options" key={index} value={category}>
                    {category}
                </option>
            ))}
        </select>
    </SortDiv>;
}