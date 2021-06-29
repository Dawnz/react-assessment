import styled from "styled-components"
import HomeWorld from "../Interview Assets/Homeworld.svg"
import Card from "../Interview Assets/Card.svg"
import Starship from "../Interview Assets/Starship.svg"
import Vehicle from "../Interview Assets/Vehicle.svg"
import Female from "../Interview Assets/Gender-Female.svg"
import Male from "../Interview Assets/Gender-Male.svg"
const CardDiv = styled.div`
height: 282px;
width: 216px;
border-radius: 8px;
margin: 0px 24px;
align-self: stretch;
border: 1px solid red;
/* justify-content: center; */
.header{
    background: #969696;
    height: 98px;
    position:relative;
    color: white;
    border-top-left-radius:8px ;
    border-top-right-radius:8px ;
}
.header .header-text{
    position: absolute;
    line-height: 24px;
    height: 24px;
    width: 64px;
    top: 64px;
    left: 16px;
    margin-top: 0;
    bottom: 10px;
    font-weight: 400;
    /* padding-left: 25px; */
}
.header .header-image{
    position: absolute;
    left: 18.5px;
    top: 16.5px;
    height:15px;
    width:11px;
}
.card{
    /* padding-bottom: 8px; */
    /* border: 1px solid red; */
    display: grid;
    grid-auto-flow: column;
    /* font-family: Roboto; */
    font-size: 10px;
    line-height: 10px;
    text-align: center;
    background: #EDEDED;
    border-radius: 4px; 
    margin-bottom: 8px;
    height: 32px;
    width: 184px;
    border-radius: 4px;
    /* padding-left: 8px; */
    padding:2px 8px;
    justify-content: space-between;
}
.species{
    /* border: 1px solid red; */
    border-bottom: 2px solid #D4D4D4;
    border-radius: 2px;
    display: grid;
    grid-auto-flow: column;
    justify-content:space-between;
    margin-bottom: 16px;
}
.card-container{
    /* border: 1px solid red; */
    display: grid;
    /* margin:0; */
    justify-content: center;
}
.card-value,.inner-title{
    padding-top: 8px;
}
.card .inner-card, .inner-species, .card-value{
    display: flex;
    margin:0;
    /* grid-auto-flow: column; */
    /* border: 10px solid red; */
}
.heading-content{
    margin-top: 18;
    margin-bottom: 8px;
}
.heading-content, .card-value{
    /* border: 1px solid red; */
    font-size: 14px;
    line-height: 14px;
    align-content: center;
    font-weight: normal;
    font-style: normal;
    /* margin:0; */
    color:#3B3B3B;

}
.gender-info {
    margin-left: 5px;
}

.card .inner-card .inner-title {
    height: 10px;
    line-height: 10px;
    width: 46px;
    left: 20px;
    top: 3px;
    text-align: center;
    padding-left: 5px;
    margin:0;
}

`;

export default function CardComponent() {
    return <CardDiv>
        <div className="header">
            <img className="header-image" src={Card} alt="CardIcon"></img>
            <h2 className="header-text">Name</h2>
        </div>
        <div className="card-container">
            <div className="species gender">
                <div className="inner-species heading">
                    <img src={Male} alt="Male"></img>
                    <h3 className="heading-content gender-info">19BBYY</h3>
                </div>
                <h3 className="heading-content">Species</h3></div>
            {/* underline   */}
            <div className="card div1">
                <div className="inner-card card1">
                    <img src={HomeWorld} alt="homeworld"></img>
                    <p className="inner-title">HOMEWORLD </p>
                </div>
                <p className="card-value">Planet</p>
            </div>
            <div className="card div2">
                <div className="inner-card card2">
                    <img src={Vehicle} alt="Vehicle"></img>
                    <p className="inner-title">VEHICLE </p>
                </div>
                <p className="card-value">0</p>
            </div>
            <div className="card div3">
                <div className="inner-card card3">
                    <img src={Starship} alt="Starship"></img>
                    <p className="inner-title">STARSHIP </p>
                </div>
                <p className="card-value">0</p>
            </div>
        </div>
    </CardDiv>
}