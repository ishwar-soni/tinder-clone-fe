import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone-be-ishwar.herokuapp.com/",
});

export default instance;
