import axios from "axios";

export const tesloApi = axios.create({
    baseURL: "/api",
});
