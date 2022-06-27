import axios from "axios";

const axiosClient = axios.create({
    baseURL: `http://ec2-54-91-88-28.compute-1.amazonaws.com`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default axiosClient;
