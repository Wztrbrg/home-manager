import * as api from "../api/api.js";

//Code for storing in database
export const getTasks = async () => {
  try {
    const { data } = await api.getTasks();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createTask = async (task) => {
  try {
    const { data } = await api.createTask(task);
    return data;
  } catch (error) {
    console.log(error);
  }
};
