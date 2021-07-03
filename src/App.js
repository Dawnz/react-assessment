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
  const allData = results || null


  useEffect(() => {
    const getUsers = async function (pageNo = 1) {
      const actualUrl = allCardsUrl + `?page=${pageNo}`;
      const apiResults = await axios.get(actualUrl)
        .then(resp => {
          // const newValue = resp?.data?.results?.map(async result => {
          //   const homeworld = await axios.get(result.homeworld).then(res => res.data.name);
          //   const species = await axios.get(result.species).then(res => res.data.name);
          //   return { ...result, ...{ homeworld: homeworld, species: species } }
          // })

          // console.log(newValue, resp.data);
          // resp.data
          // setResults(prev => {
          //   return prev ? [...prev, ...resp.data.results] : [resp.data.results]
          // })
          // { ...resp.data, ...{ results: { ...resp.data.results, homeworld: "test" } } }
          return resp.data
          // };
        })
        ;
      // console.log(apiResults);
      return apiResults;

    }

    const modifyList = async function (pageNo = 1) {
      const mod = await getUsers(pageNo);
      Promise.all(
        mod.results?.map(async result => {
          const homeworld = await axios.get(result.homeworld).then(res => res.data.name);
          const species = await axios.get(result.species).then(res => res.data.name);

          return { ...result, ...{ homeworld: homeworld, species: species } }
        })
      ).then((allResponses) => {
        setMasterData(prev => {
          const breakDown = allResponses?.map(res => res
          )
          return prev ? [...prev, ...breakDown] : [...breakDown]
        });
        console.log(allResponses);
      })


      // return allResponses;

      // await mod.results.map(async result => {
      //   const homeworld = await axios.get(result.homeworld).then(res => res.data.name);
      //   const species = await axios.get(result.species).then(res => res.data.name);
      //   return { ...result, ...{ homeworld: homeworld, species: species } }

      // })

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
  // useEffect(() => {

  //   const getMaster = async () => {
  //     await results?.map(async result => {
  //       const homeworld = await axios.get(result.homeworld).then(res => res.data.name);
  //       const species = await axios.get(result.species).then(res => res.data.name);
  //       setMasterData(prev => {

  //         return prev ? [...prev, { ...result, ...{ homeworld: homeworld, species: species } }] : [{ ...result, ...{ homeworld: homeworld, species: species } }]
  //       });
  //       // console.log({ ...result, ...{ homeworld: homeworld, species: species } });
  //       return { result, ...{ homeworld: homeworld, species: species } }
  //     })

  //   }
  //   getMaster();

  // }, [results])

  // // const finalData = masterData ? masterData : null
  // console.log(masterData);

  // useEffect(() => {
  //   const getPlanets = async function (pageNo = 1) {
  //     const actualUrl = allPlanetsUrl + `?page=${pageNo}`;
  //     const apiResults = await axios.get(actualUrl)
  //       .then(resp => {
  //         return resp.data;
  //       });

  //     return apiResults;

  //   }
  //   const getEntireUserList = async function (pageNo = 1) {
  //     const results = await getPlanets(pageNo);
  //     const [...value] = results.results.flat()
  //     // console.log("Retreiving data from API for page : " + pageNo);
  //     if (results.next !== null) {
  //       setPlanets(prev => {
  //         return prev ? [...prev, ...value] : [...value]
  //       })
  //       // console.log(results.next);
  //       return results + await getEntireUserList(pageNo + 1);
  //     } else {
  //       setPlanets(prev => {
  //         return prev ? [...prev, ...value] : [...value]
  //       })
  //       return results;
  //     }
  //   };
  //   getEntireUserList()
  // }, [])

  // useEffect(() => {
  //   const getSpecies = async function (pageNo = 1) {
  //     const actualUrl = allSpeciesUrl + `?page=${pageNo}`;
  //     const apiResults = await axios.get(actualUrl)
  //       .then(resp => {
  //         return resp.data;
  //       });

  //     return apiResults;

  //   }
  //   const getEntireUserList = async function (pageNo = 1) {
  //     const results = await getSpecies(pageNo);
  //     const [...value] = results.results.flat()
  //     // console.log("Retreiving data from API for page : " + pageNo);
  //     if (results.next !== null) {
  //       setSpecies(prev => {
  //         return prev ? [...prev, ...value] : [...value]
  //       })
  //       // console.log(results.next);
  //       return results + await getEntireUserList(pageNo + 1);
  //     } else {
  //       setSpecies(prev => {
  //         return prev ? [...prev, ...value] : [...value]
  //       })
  //       return results;
  //     }
  //   };
  //   getEntireUserList()
  // }, [])

  // setMasterData()
  // console.log(planets);
  // const planetInfo = planets?.map(planet => planet.name)
  // const speciesInfo = species?.map(species => species.name)
  // console.log(planetInfo, speciesInfo);
  // console.log(results);

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
      <SortComponent content={setResults} fields={categories} setSelected={setSelected}></SortComponent>
      {/* <CardDetailsComponent cardInfo={results } /> */}
      <SearchComponent content={setResults} selected={selected} />
      <AllCardsComponent cardsData={results} />

      {/* <CardComponent cardInfo={data}></CardComponent> */}
      <>
        {/* {loading ? <div>Loading...</div> : (hasError ? <div>Error occured.</div> : (response.map(data => <div>{data}</div>)))} */}
      </>
    </>
  );
}

export default App;
