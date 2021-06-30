import styled from "styled-components";
import CardComponent from "./CardComponent";
const AllCardsDiv = styled.div`
display: grid;
grid-auto-flow: column;

`;
export default function AllCardsCOmponent({ cardInfo }) {
    console.log(cardInfo);
    return (
        <AllCardsDiv>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
        </AllCardsDiv>
    )
}