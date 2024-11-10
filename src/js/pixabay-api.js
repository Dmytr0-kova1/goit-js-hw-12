import axios, { Axios } from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "46814382-75c1b20cf6e14c25ef5bdd9a6";

export default async function fetchData(query, page) {
    const { data } = await axios(`${BASE_URL}`, {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page,
            per_page: 15
        }
    })
    return data;  
}



