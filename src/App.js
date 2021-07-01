import axios from "axios";
import CardComponent from "./component/CardComponent";
import InfoComponent from "./component/InfoComponent";
import useFetch from "./services/useFetch";
import AllCardsCOmponent from "./component/AllCardsComponent";
import CardDetailsComponent from "./component/CardDetailsComponent";
import { fetchURL } from "./utilities/fetchUrl";
import { useEffect, useState } from "react";
import SearchComponent from "./component/SearchComponent";
import SortComponent from "./component/SortComponent";
function App() {
  const url = 'https://swapi.dev/api/';

  const allCardsUrl = url + 'people'

  const [results, setResults] = useState(null);


  useEffect(() => {
    const getUsers = async function (pageNo = 1) {

      let actualUrl = allCardsUrl + `?page=${pageNo}`;
      var apiResults = await axios.get(actualUrl)
        .then(resp => {
          return resp.data;
        });

      return apiResults;

    }
    const getEntireUserList = async function (pageNo = 1) {
      const results = await getUsers(pageNo);
      const [...value] = results.results
      console.log("Retreiving data from API for page : " + pageNo);

      if (results.next !== null) {
        setResults(prev => {

          return prev ? [...prev, value] : [value]
        })
        // console.log(results.next);
        return results + await getEntireUserList(pageNo + 1);
      } else {
        setResults(prev => {
          return prev ? [...prev, value] : [value]
        })
        return results;
      }
    };
    getEntireUserList()
  }, [])

  const allData = results?.flat(1)
  return (
    <div className="App">
      {/* <SortComponent></SortComponent> */}
      {/* <CardDetailsComponent cardInfo={data} /> */}
      {/* <SearchComponent /> */}
      <AllCardsCOmponent cardsData={allData} />

      {/* <CardComponent cardInfo={data}></CardComponent> */}
      <>
        {/* {loading ? <div>Loading...</div> : (hasError ? <div>Error occured.</div> : (response.map(data => <div>{data}</div>)))} */}
      </>
    </div>
  );
}

export default App;
