import axios from "axios";

export const fetchURL = async (urls) => {


    Promise.all(
        urls?.map(url => axios.get(url).then(res => res.data))
    )
        .then((allResponses) => {
            console.log(allResponses);
            return allResponses;
            // allResponses.map((response) => {
            //     console.log(response.name);
            //     return response.name;
            // }


            // )

        })
        .catch((e) => {
            console.log(e);
            // handle errors
        });
};