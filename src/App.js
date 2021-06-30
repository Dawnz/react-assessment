import axios from "axios";
import CardComponent from "./component/CardComponent";
import InfoComponent from "./component/InfoComponent";
import useFetch from "./services/useFetch";

function App() {
  const url = 'https://swapi.dev/api/';
  const [response, loading, hasError] = useFetch(url + 'people');
  console.log(response);
  const data = hasError ? hasError : response
  const count = data ? data.count : null;
  console.log(count);
  // const { count: peopleCount } = response ? response : null;
  // console.log(peopleCount);
  // console.log(response, loading, hasError);
  return (
    <div className="App">
      {/* <CardComponent></CardComponent> */}
      <>
        {/* {loading ? <div>Loading...</div> : (hasError ? <div>Error occured.</div> : (response.map(data => <div>{data}</div>)))} */}
      </>
    </div>
  );
}

export default App;
