const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "46814382-75c1b20cf6e14c25ef5bdd9a6";

export default function fetchData(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    })

    return fetch(`${BASE_URL}?${params}`)
        .then(response => {
        if (!response.ok) { 
            throw new Error(response.statusText)
            }
            
            return response.json();
    })
}



