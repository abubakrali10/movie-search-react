import React from 'react';
import PropTypes from 'prop-types'
import styles from './MovieList.module.css';
import starIcon from '../../assets/star-shape.svg';
import { useEffect, useState } from "react"
import { getGenres } from '../../services/api';


function MovieItem({ movie }) {
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		async function fetchGenres() {
		const genresData = await getGenres();
		setGenres(genresData);
		}
		fetchGenres();
	}, []);

	const movieGenres = movie.genre_ids.map(genreId => {
		const matchingGenre = genres.find(genre => genre.id === genreId);
		return matchingGenre ? matchingGenre.name : '';
	});

	return (
		<article className={styles.movieItem}>
			<div className={styles.rateBadge}>
				<img src={starIcon} />
				<span>{movie.vote_average}</span>
			</div>
			<div className={styles.posterContainer}>
				<img
					src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
					className={styles.poster}
				/>
			</div>
			<div className={styles.movieDetails}>
				<h2 className={styles.movieName}>{movie.title}</h2>
				<p className={styles.year}>{movie.release_date}</p>
				<p className={styles.genre}>{movieGenres.join(', ')}</p>
			</div>
		</article>
	)
}

MovieItem.propTypes = {
	movie: PropTypes.object.isRequired,
};

export default MovieItem
