import axios from 'axios';

const API_KEY = '125725f49ad2ae69609a1a5a9c4211d9';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getFilms = page => {
  return axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`
  );


};
