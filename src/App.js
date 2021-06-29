import axios from "axios";

function App() {
  const url = 'https://swapi.dev/api/';
  const getAllPeople = () => {
    axios.get(`${url}people/1`)
      .then((response) => {
        const allPeople = response.data
        console.log(allPeople);
      })
      .catch(error => console.error(`Error: ${error}`))
  }
  getAllPeople();

  return (
    <div className="App">
      <p>hello world</p>
    </div>
  );
}

export default App;
