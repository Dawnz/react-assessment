import axios from "axios";
import CardComponent from "./component/CardComponent";
import InfoComponent from "./component/InfoComponent";
import useFetch from "./services/useFetch";
import AllCardsComponent from "./component/AllCardsComponent";
import CardDetailsComponent from "./component/CardDetailsComponent";
import { fetchURL } from "./utilities/fetchUrl";
import { useCallback, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import SearchComponent from "./component/SearchComponent";
import SortComponent from "./component/SortComponent";
function App() {
  const url = 'https://swapi.dev/api/';

  const allCardsUrl = url + 'people'
  const allPlanetsUrl = url + 'planets'
  const allSpeciesUrl = url + 'species'


  const [results, setResults] = useState(null);
  // const [planets, setPlanets] = useState(null);
  // const [species, setSpecies] = useState(null);

  const [masterData, setMasterData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [selected, setSelected] = useState(null);


  useEffect(() => {
    const getUsers = async function (pageNo = 1) {
      const actualUrl = allCardsUrl + `?page=${pageNo}`;
      const apiResults = await axios.get(actualUrl)
        .then(resp => {

          return resp.data

        })
        ;
      return apiResults;
    }

    const modifyList = async function (pageNo = 1) {
      const mod = await getUsers(pageNo);
      Promise.all(
        mod.results?.map(async result => {
          const homeworld = await axios.get(result.homeworld).then(res => res.data.name);
          const species = await axios.get(result.species).then(res => res.data.name);
          const input = ({ ...result, ...{ homeworld: homeworld, species: species } });
          // console.log(input);
          setMasterData(prev => {

            // console.log(responseData, allResponses);
            return (prev ? [...prev, input] : [input])
          });
          return { ...result, ...{ homeworld: homeworld, species: species } }
        })
      ).then((allResponses) => {

        // console.log(allResponses);
      })
      return mod
    }

    const getEntireUserList = async function (pageNo = 1) {
      const res = await modifyList(pageNo);
      // console.log(res?.results?.[0]?.homeworld);
      const [...value] = res.results.flat()
      // const [...newvalue] = value.map(async result => {
      //   const homeworld = await axios.get(result.homeworld).then(res => res.data.name);
      //   const species = await axios.get(result.species).then(res => res.data.name);
      //   return { result, ...{ homeworld: homeworld, species: species } }
      // })



      // console.log(newvalue);
      // console.log("Retreiving data from API for page : " + pageNo);
      if (res.next !== null) {
        // setResults(prev => {
        //   return prev ? [...prev, ...value] : [...value]
        // })
        // console.log(results.next);
        // console.log(results);
        return res + await getEntireUserList(pageNo + 1);
      } else {
        // setResults(prev => {
        //   return prev ? [...prev, ...value] : [...value];
        // })
        // console.log(results);
        return res;
      }

    };
    getEntireUserList();

  }, [])

  console.log(masterData);



  const [catData] = useFetch(url);
  const categories = catData ? Object.keys(catData) : null

  // console.log(results);
  return (
    <>

      {/* <Switch>
        <Route exact from="/" render={props => <SearchComponent content={setResults} selected={selected} {...props} />} />
        <Route exact from="/" render={props => <AllCardsComponent cardsData={results} {...props} />} />
        <Route exact from="/Details" render={props => <CardDetailsComponent cardInfo={results?.[0]} {...props} />} />

      </Switch> */}
      {/* <SortComponent content={setResults} fields={categories} setSelected={setSelected}></SortComponent> */}
      {/* <CardDetailsComponent cardInfo={results } /> */}
      {/* <SearchComponent content={setResults} selected={selected} /> */}
      <AllCardsComponent cardsData={masterData} />

      {/* <CardComponent cardInfo={data}></CardComponent> */}
      <>
        {/* {loading ? <div>Loading...</div> : (hasError ? <div>Error occured.</div> : (response.map(data => <div>{data}</div>)))} */}
      </>
    </>
  );
}

export default App;
