import styled from "styled-components"
import InfoComponent from "./InfoComponent"
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
/* border: 1px solid red; */

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
    }
.header .header-image{
    position: absolute;
    left: 18.5px;
    top: 16.5px;
    height:15px;
    width:11px;
}
.card{
    /* border: 1px solid red; */
    display: grid;
    grid-auto-flow: column;
    font-size: 10px;
    line-height: 10px;
    text-align: center;
    background: #EDEDED;
    border-radius: 4px; 
    margin-bottom: 8px;
    height: 32px;
    width: 184px;
    border-radius: 4px;
    padding:2px 8px;
    justify-content: space-between;
}
.species{
   border-bottom: 2px solid #D4D4D4;
    border-radius: 2px;
    display: grid;
    grid-auto-flow: column;
    justify-content:space-between;
    margin-bottom: 16px;
}
.card-container{
   display: grid;
    justify-content: center;
}
 .inner-species{
    display: flex;
    margin:0;
}
.heading-content{
    margin-top: 18;
    margin-bottom: 8px;
}
.heading-content{
   font-size: 14px;
    line-height: 14px;
    align-content: center;
    font-weight: normal;
    font-style: normal;
    color:#3B3B3B;

}
.gender-info {
    margin-left: 5px;
}

`;

export default function CardComponent({ cardInfo }) {
    console.log(cardInfo);
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

            <InfoComponent image={HomeWorld} title="HOMEWORLD" value="Planet" />
            <InfoComponent image={Vehicle} title="VEHICLE" value='0' />
            <InfoComponent image={Starship} title="STARSHIP" value='0' />
        </div>
    </CardDiv>
}