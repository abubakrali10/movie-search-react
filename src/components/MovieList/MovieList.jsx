import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './MovieItem';
import styles from './MovieList.module.css';

function MovieList({ movies }) {
	return (
		<main className={styles.movieList}>
			{movies.map((movie) => (
        		<MovieItem key={movie.id} movie={movie} />
      		))}
		</main>
	)
}

MovieList.propTypes = {
	movies: PropTypes.array.isRequired,
};

export default MovieList
