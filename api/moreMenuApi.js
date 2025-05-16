import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/moremenu'; // Adjust this if needed

// CREATE
export const createMoreItem = async (itemData) => {
  const response = await axios.post(BASE_URL, itemData);
  return response.data;
};

// READ ALL
export const getMoreItems = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// READ ONE
export const getMoreItemById = async (id) => {
  const response = await axios.get(${BASE_URL}/${id});
  return response.data;
};

// UPDATE
export const updateMoreItem = async (id, updatedData) => {
  const response = await axios.put(${BASE_URL}/${id}, updatedData);
  return response.data;
};

// DELETE
export const deleteMoreItem = async (id) => {
  const response = await axios.delete(${BASE_URL}/${id});
  return response.data;
};