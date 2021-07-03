import styled from "styled-components";
import CardComponent from "./CardComponent";
import useFetch from "../services/useFetch";
import axios from "axios";
import { useState, useEffect } from "react";
const AllCardsDiv = styled.div`
display: grid;
grid-auto-flow: column;

`;
export default function AllCardsComponent({ cardsData }) {
    // const allCardsUrl = cardsData + 'people'

    // const [results, setResults] = useState(null);


    // useEffect(() => {
    //     const getUsers = async function (pageNo = 1) {

    //         let actualUrl = allCardsUrl + `?page=${pageNo}`;
    //         var apiResults = await axios.get(actualUrl)
    //             .then(resp => {
    //                 return resp.data;
    //             });

    //         return apiResults;

    //     }
    //     const getEntireUserList = async function (pageNo = 1) {
    //         const results = await getUsers(pageNo);
    //         const [...value] = results.results
    //         console.log("Retreiving data from API for page : " + pageNo);

    //         if (results.next !== null) {
    //             setResults(prev => {

    //                 return prev ? [...prev, value] : [value]
    //             })
    //             // console.log(results.next);
    //             return results + await getEntireUserList(pageNo + 1);
    //         } else {
    //             setResults(prev => {
    //                 return prev ? [...prev, value] : [value]
    //             })
    //             return results;
    //         }
    //     };
    //     getEntireUserList()
    // }, [])

    // const allData = results?.map(allData => allData.map(data => data.name))
    // const allData = results?.flat(1)

    // console.log(allData);


    return (
        <AllCardsDiv>
            {
                cardsData?.map((result, index) =>
                    // console.log(cardsData + `people/${index + 1}`)
                    <CardComponent key={index} cardInfo={result}></CardComponent>
                )
            }
        </AllCardsDiv>
    )
}