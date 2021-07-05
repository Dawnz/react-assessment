import styled from "styled-components";
import CardComponent from "./CardComponent";
import useFetch from "../services/useFetch";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const AllCardsDiv = styled.div`
display: grid;
/* grid-auto-flow: column; */
grid-template-columns: repeat(5, 1fr);
gap: 24px;

`;

const StyledLink = styled(Link)`
text-decoration: none;

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`;
export default function AllCardsComponent({ cardsData }) {
    return (
        <AllCardsDiv>
            {
                cardsData?.map((result, index) =>
                    // console.log(cardsData + `people/${index + 1}`)
                    <Link to={{ pathname: `${result.name} details`, state: { cardInfo: result } }} key={index} style={{ textDecoration: 'none', color: 'black' }}>
                        <CardComponent key={index} cardInfo={result}></CardComponent>
                    </Link>
                )
            }
        </AllCardsDiv>
    )
}