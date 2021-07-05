import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useFetch from '../services/useFetch';

const SearchDiv = styled.div`
/* height: 32px; */
.input-field{
    margin:0;
    padding:0;
    height: 32px;
    width: 847px;
    left: 0px;
    top: 0px;
    border-radius: 4px;
    border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  /* background-color: #eee; */
    
}
.input-field:focus {
  outline: none;
}
label {
  margin:0;
  padding: 0;
  position: relative;
}

label::before {
  content: "";
  position: absolute;
  right: 5px;
  top: 0;
  bottom: 0;
  width: 15px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E") center / contain no-repeat;
}

`;

export default function SearchComponent({ content, setMasterData, selectedSort, searchTerm, setSearchTerm }) {

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {

        const results = content?.filter((cont) => {
            // console.log(selected);
            if (selectedSort === "vehicles" || selectedSort === "starships") {
                return cont[selectedSort]["length"]?.toString()?.toLowerCase().includes(searchTerm)
            }

            else return cont[selectedSort]?.toLowerCase().includes(searchTerm)
        });
        setMasterData(results);

    }, [searchTerm]);


    // console.log(searchResults);
    return (
        <SearchDiv>
            <label>
                <input
                    className="input-field"
                    name="SearchBar"
                    onChange={handleChange}
                    placeholder="Search..."
                />
            </label>
        </SearchDiv>
    );
}