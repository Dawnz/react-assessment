import styled from "styled-components"
import Card from "../Interview Assets/Card.svg"
import Deck from "../Interview Assets/Deck.svg"

const HeaderDiv = styled.div`
/* display: grid; */
/* grid-auto-flow: column; */
/* width: 100%; */
margin-top: 68px;
/* align-content: space-between; */
/* align-items: center; */

/* justify-items: center; */
/* padding: 0 132px; */
/* margin-left: 132px; */
/* border: 1px solid black; */

margin-bottom: 48px;

.head-container{
    display: grid;
grid-auto-flow: column;
justify-content: space-between;
padding: 0 132px;
border-bottom: 2px solid  #B8B8B8;

@media (max-width: 700px)
{
    .header-title{
        display: none;
    }
}
/* width:100%; */
    /* margin: 0 132px; */
    /* width: 100%; */
    /* align-self: center;  */

}
/* align-content: space-between; */

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
    /* height: 27px; */
    padding: 8px;
    margin-top:0;
    border-radius: 4px;
    line-height: 14px;
    /* margin-top:30px; */
    margin-bottom:10px;
    margin-right: 24px;
}
.user-name{
    margin:0;
    padding: 0;
}
`;
export default function Header() {
    return <HeaderDiv >
        <div className="head-container">
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
        </div>
    </HeaderDiv>
}