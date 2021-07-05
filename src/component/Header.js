import styled from "styled-components"
import Card from "../Interview Assets/Card.svg"
import Deck from "../Interview Assets/Deck.svg"

const HeaderDiv = styled.div`
display: grid;
grid-auto-flow: column;
/* align-content: space-between; */
align-items: center;
justify-content: space-between;
/* justify-items: center; */
/* padding: 0 132px; */
margin-left: 132px;
/* border: 1px solid black; */
border-bottom: 2px solid  #B8B8B8;
margin-bottom: 48px;
width:1176px;

/* align-content: space-between; */
/* width: 100%; */

.deck-buttons{
    /* border: 1px solid blue; */
    margin:0;
}

.header-title .title{
    /* border: 1px solid red; */
    margin:0;
    font-size: 20px;
    line-height: 20px;
    font-weight: 400;
    
    
}
.deck-button{
    /* border: 0; */
     /* border: 10px solid yellow; */
}
.all-cards-wrapper{
    background-color: white;
}

.deck-buttons{
    display: grid;
    grid-auto-flow: column;
    padding:8px;
    /* height: 32px; */
    justify-items: center;
    /* justify-content: center; */
     /* border: 10px solid yellow; */
}
.all-cards{
    background-color: white;
}
.decks{
    background-color: #E4E4E4;

  }
 .btn{
     border: 0;
    
}
.decks-wrapper{
    background-color: #E4E4E4;
    align-items: center;
}
.deck-image{
    /* padding: 4px 0; */
    margin:0;
    padding: 0;
}
.user-display{
    
    margin:0;
    border: 1px solid #B8B8B8;
    height: 27px;
    padding: 0 24px 24px 24px;
    margin-top:0;
    border-radius: 4px;
    /* line-height: 14px; */
    margin-top:30px;
    margin-bottom:10px;
}
`;
export default function Header() {
    return <HeaderDiv>
        <div className="deck-buttons">
            <div className="deck-button all-cards-wrapper">
                <img src={Card} alt="card" className="deck-image"></img>
                <button className="btn all-cards">All  Cards</button>
            </div>
            <div className="deck-button decks-wrapper">
                <img src={Deck} alt="card"></img>
                <button className="btn decks">Decks</button>
            </div>

        </div>
        <div className="header-title">
            <h1 className="title">SW-API Deck Builder</h1>
        </div>

        <div className="user-display">
            <p className="user-name">Damian Green</p>
        </div>

    </HeaderDiv>
}