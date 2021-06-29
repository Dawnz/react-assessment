import axios from "axios";
import CardComponent from "./component/CardComponent";

function App() {
  const url = 'https://swapi.dev/api/';
  const getAllPeople = () => {
    axios.get(`${url}people`)
      .then((response) => {
        const allPeople = response.data
        // console.log(allPeople);
      })
      .catch(error => console.error(`Error: ${error}`))
  }
  // getAllPeople();

  return (
    <div className="App">
      <CardComponent></CardComponent>
    </div>
  );
}

export default App;
