import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

const getPeople = async () => {
  const res = await instance.get('/people');
  const people = res.data.results;
  return people;
}

export default {
  getPeople
}