import styled from "styled-components";
import HomeWorld from "../Interview Assets/Homeworld.svg"

const InfoDiv = styled.div`
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
    padding:0 8px;
    justify-content: space-between;

    .inner-card{
        display: grid;
        grid-auto-flow: column;
        align-items: center;
    }
    .inner-title{
        margin:0;
        padding-left: 5px;
    }
    .card-value{
    margin:0;
    font-size: 14px;
    line-height: 14px;
    color:#3B3B3B;
    padding-top: 8px;

}

`;
export default function InfoComponent({ image, title, value }) {
    return (
        <InfoDiv className="card div1">
            <div className="inner-card card1">
                <img src={image} alt={value}></img>
                <p className="inner-title">{title} </p>
            </div>
            <p className="card-value">{value}</p>
        </InfoDiv>
    );
}