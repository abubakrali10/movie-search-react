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
		return res.data.reults;
	} catch (err) {
		console.error('Error fetching popular movies', err);
		return [];
	}
};