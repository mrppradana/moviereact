import axios from "axios";

export const apiTmdb = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Accept:"application/json"
    },
    params: {
        api_key: "51c9d5760571e85e84cae213864ebd12",
    },
})