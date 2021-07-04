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
import Header from "./component/Header";
import Breadcrumbs from "./utilities/Breadcrumbs";
import OrderComponent from "./component/OrderComponent";
function App() {
  const url = 'https://swapi.dev/api/';

  const allCardsUrl = url + 'people'
  const allPlanetsUrl = url + 'planets'
  const allSpeciesUrl = url + 'species'
  const categories = ["Homeworld", "Species", "Vehicle Count", "Starship Count"]

  const [results, setResults] = useState(null);
  const [masterData, setMasterData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selected, setSelected] = useState("name");



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

          const input = ({ ...result, ...{ homeworld: homeworld, species: species || 'Human' } });
          // console.log(input);
          setMasterData(prev => {
            return (prev ? [...prev, input] : [input])
          });
          setResults(prev => {
            return (prev ? [...prev, input] : [input])
          });
          return { ...result, ...{ homeworld: homeworld, species: species } }
        })
      ).then()
      return mod
    }
    const getEntireUserList = async function (pageNo = 1) {
      const res = await modifyList(pageNo);
      if (res.next !== null) {
        return res + await getEntireUserList(pageNo + 1);
      } else {
        return res;
      }
    };
    getEntireUserList();
    // setResults(masterData)

  }, [])

  // console.log(selected);
  // const testArray =[
  //   { path: "/", name: "AllCards", Component: Header,SortComponent,SearchComponent,AllCardsComponent },
  //   // { path: "/details/:nam", name: `${nam} Details`, Component: AllCardsComponent },
  //   { path: "/pizza/:pizzaId", name: "Edit Pizza", Component: EditPizza },
  //   {
  //     path: "/pizza/:pizzaId/toppings",
  //     name: "Pizza Toppings",
  //     Component: Toppings
  //   }
  // ];
  // 
  // console.log(results);
  const value = "test"
  return (
    <div>
      <Header></Header>
      <Breadcrumbs></Breadcrumbs>
      <Switch>
        <Route exact from="/" render={props => [
          <SearchComponent content={setMasterData} data={results} selected={selected} searchTerm={searchTerm} setSearchTerm={setSearchTerm}  {...props} key={1} />,
          <SortComponent setSelected={setSelected} key={2} />,
          <OrderComponent key={3} />,
          <AllCardsComponent cardsData={masterData} key={4} {...props} />]
        } />
        {/* <Route from="/" render={props => 404} /> */}
        <Route exact from="/:name Details" render={props => <CardDetailsComponent cardInfo={results?.[2]} {...props} />} />

      </Switch>
      {/* <SortComponent setSelected={setSelected}></SortComponent> */}
      {/* <CardDetailsComponent cardInfo={masterData?.[2]} /> */}
      {/* <SearchComponent content={setMasterData} data={results} selected={selected} searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      {/* <AllCardsComponent cardsData={masterData} /> */}

      {/* <CardComponent cardInfo={data}></CardComponent> */}
      <>
        {/* {loading ? <div>Loading...</div> : (hasError ? <div>Error occured.</div> : (response.map(data => <div>{data}</div>)))} */}
      </>
    </div>
  );
}

export default App;
