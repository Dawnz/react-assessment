import axios from "axios";
import CardComponent from "./component/CardComponent";
import InfoComponent from "./component/InfoComponent";
import useFetch from "./services/useFetch";
import AllCardsCOmponent from "./component/AllCardsComponent";
import CardDetailsComponent from "./component/CardDetailsComponent";
import { fetchURL } from "./utilities/fetchUrl";
import { useEffect } from "react";

function App() {
  const url = 'https://swapi.dev/api/';
  // const urls = [
  //   'https://swapi.dev/api/people/1',
  //   'https://swapi.dev/api/people/2',
  //   'https://swapi.dev/api/people/3',
  //   'https://swapi.dev/api/people/4'
  // ];
  //9 pages in total
  const [response, loading, hasError] = useFetch(url + `people/1`)
  // useFetch(url + "people", { params: { page: 3 } });
  const data = loading ? loading : hasError ? hasError : response

  // useEffect(() => {
  //   fetchURL(urls)
  // }, [])
  return (
    <div className="App">
      <CardDetailsComponent cardInfo={data} />
      {/* <AllCardsCOmponent cardInfo={data} /> */}
      {/* <CardComponent cardInfo={data}></CardComponent> */}
      <>
        {/* {loading ? <div>Loading...</div> : (hasError ? <div>Error occured.</div> : (response.map(data => <div>{data}</div>)))} */}
      </>
    </div>
  );
}

export default App;
