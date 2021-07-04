import styled from "styled-components"

const HeaderDiv = styled.div`
display: grid;
grid-auto-flow: column;
justify-content: space-around;
align-items: center;
/* border: 1px solid black; */
border-bottom: 2px solid  #B8B8B8;
/* align-content: space-between; */
/* width: 100%; */

.deck-buttons{
    /* border: 1px solid blue; */
    margin:0;
}

.header-title{
    /* border: 1px solid red; */
    margin:0
}

.user-display{
    /* border: 1px solid yellow; */
    margin:0;
}
`;
export default function Header() {
    return <HeaderDiv>
        <div className="deck-buttons">
            <button className="deck-button">All  Cards</button>
            <button className="deck-button">Decks</button>
        </div>
        <div className="header-title">
            <h1>SW-API Deck Builder</h1>
        </div>

        <div className="user-display">
            <p className="user-name">Damian Green</p>
        </div>

    </HeaderDiv>
}