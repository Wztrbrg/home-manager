import axios from "axios";

const url = "http://localhost:3002";

//GET
export const getTasks = () => axios.get(url + "/tasks");

//POST
export const createTask = (task) => axios.post(url + "/tasks", task);
