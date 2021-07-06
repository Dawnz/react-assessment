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
import AllSearchComponent from "./component/AllSearchComponents";
function App() {
  const url = 'https://swapi.dev/api/';

  const allCardsUrl = url + 'people'

  const [results, setResults] = useState(null);
  const [masterData, setMasterData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSort, setSelectedSort] = useState("name");
  const [selectedOrder, setSelectedOrder] = useState('ASC')



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

  }, [])


  return (
    <>
      <Header></Header>
      <Breadcrumbs></Breadcrumbs>
      <Switch>
        <Route exact from="/" render={props =>
          <AllSearchComponent setMasterData={setMasterData} results={results} selectedSort={selectedSort}
            setSelectedSort={setSelectedSort} searchTerm={searchTerm} setSearchTerm={setSearchTerm}
            masterData={masterData} selectedOrder={selectedOrder} setSelectedOrder={setSelectedOrder} {...props} />
        } />
        {/* <Route from="/" render={()=>404} /> */}
        <Route exact from="/:name Details" render={props => <CardDetailsComponent {...props} />} />

      </Switch>
    </>
  );
}

export default App;
