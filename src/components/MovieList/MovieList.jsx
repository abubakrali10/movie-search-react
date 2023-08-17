import MovieItem from './MovieItem';
import styles from './MovieList.module.css';

function MovieList() {
	return (
		<main className={styles.movieList}>
			<MovieItem />
			<MovieItem />
			<MovieItem />
			<MovieItem />
			<MovieItem />
			<MovieItem />
			<MovieItem />
		</main>
	)
}

export default MovieList
