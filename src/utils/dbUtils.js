/*

Code for database handling including
Create
Read
Update
Delete

*/

import * as api from "../api/api.js";

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
