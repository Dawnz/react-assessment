import axios from "axios";

export default function SWApiData(url) {

    const getAllPeople = () => {
        axios.get(`${url}people`)
            .then((response) => {
                const allPeople = response.data
                // console.log(allPeople);
            })
            .catch(error => console.error(`Error: ${error}`))
    }


}