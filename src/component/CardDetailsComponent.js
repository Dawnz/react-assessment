import styled from "styled-components"
import InfoComponent from "./InfoComponent"
import HomeWorld from "../Interview Assets/Homeworld.svg"
import Card from "../Interview Assets/Card.svg"
import Starship from "../Interview Assets/Starship.svg"
import Vehicle from "../Interview Assets/Vehicle.svg"
import Female from "../Interview Assets/Gender-Female.svg"
import Male from "../Interview Assets/Gender-Male.svg"
import useFetch from "../services/useFetch"
import axios from "axios"
import { useEffect, useState } from "react"
import { fetchURL } from "../utilities/fetchUrl"

const CardDetailsDiv = styled.div`
height: 480px;
width: 334;
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
    /* width: 64px; */
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
/* .card{
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
} */
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
    /* justify-content: center; */
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

export default function CardDetailsComponent({ cardInfo }) {
    //to get homeworld values
    const [homeworldResponse, homeworldLoading, homeworldHasError] = useFetch(cardInfo ? cardInfo.homeworld : null);
    const homeworld = homeworldResponse ? homeworldResponse.name : null;

    const [speciesResponse, speciesLoading, speciesHasError] = useFetch(cardInfo ? cardInfo.species : null);
    const species = speciesResponse ? speciesResponse.name : null;
    // console.log(homeworld);
    // console.log(cardInfo);



    // const allVehicles = cardInfo?.vehicles;
    // const vehicles = fetchURL(allVehicles);
    // const allStarships = cardInfo?.starships;
    // const starships = fetchURL(allStarships);
    // console.log(starships, vehicles);
    // const [singleshipdata] = useFetch();
    // const singleship = singleshipdata?.name;

    // allVehicles();
    // console.log(allVehicles);

    const [userInfo, setUserInfo] = useState({ vehicles: null, starships: null, });

    // const [vehicleInfo, setVehicleInfo] = useState();

    useEffect(() => {
        async function getData() {
            const starships = await Promise.all(
                cardInfo?.starships?.map(url => axios.get(url).then(res => res.data))
            )
                .then((allResponses) => {
                    console.log(allResponses);
                    return allResponses;
                })
                .catch((e) => {
                    console.log(e);
                    // handle errors
                });
            const vehicles = await Promise.all(
                cardInfo?.vehicles?.map(url => axios.get(url).then(res => res.data))
            )
                .then((allResponses) => {
                    console.log(allResponses);
                    return allResponses;
                })
                .catch((e) => {
                    console.log(e);
                    // handle errors
                });
            setUserInfo({ starships, vehicles })
        }
        getData();

    }, [cardInfo])




    return <CardDetailsDiv>
        <div className="header">
            <img className="header-image" src={Card} alt="CardIcon"></img>
            <h2 className="header-text">{cardInfo ? cardInfo.name : null}</h2>
        </div>
        <div className="card-container">
            <div className="species gender">
                <div className="inner-species heading">
                    {cardInfo?.gender === "n/a" ? null :
                        <img src={cardInfo?.gender === "female" ? Female : Male} alt="Male"></img>
                    }
                    <h3 className="heading-content gender-info">{cardInfo?.birth_year}</h3>
                </div>
                <h3 className="heading-content">{cardInfo ? cardInfo.species?.length ? species : `Human` : null}</h3></div>
            {/* underline   */}

            <InfoComponent image={HomeWorld} title="HOMEWORLD" value={homeworld ? homeworld : null} />
            {userInfo?.vehicles?.map((vehicle, index) =>

                <InfoComponent key={index} image={Vehicle} title="VEHICLE" value={vehicle.name} />
            )}

            {userInfo?.starships?.map((starship, index) =>
                // console.log(userInfo?.starships?.map(s => s = starship))
                <InfoComponent key={index} image={Starship} title="STARSHIP" value={starship.name} />
            )}

        </div>
    </CardDetailsDiv>
}