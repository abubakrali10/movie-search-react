import axios from "axios";

const API_KEY = '14a0abf175c39517aab5a63de8c76df6';
const URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
	try {
		const res = await axios.get(`${URL}/movie/popular`, {
			params: {
				api_key: API_KEY,
			},
		});
		return res.data.results;
	} catch (err) {
		console.error('Error fetching popular movies', err);
		return [];
	}
};

export const searchMovies = async (query) => {
	try {
	  const response = await axios.get(`${URL}/search/movie`, {
		params: {
		  api_key: API_KEY,
		  query: query,
		},
	  });
	  return response.data.results;
	} catch (error) {
	  console.error('Error searching movies:', error);
	  return [];
	}
};

export const getGenres = async () => {
	try {
		const res = await axios.get(`${URL}/genre/movie/list`, {
			params: {
				api_key: API_KEY,
			},
		});
		return res.data.genres;
	} catch (err) {
		console.error('Error fetching genres', err);
		return [];
	}
};