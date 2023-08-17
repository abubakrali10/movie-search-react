import styles from './MovieList.module.css';
import starIcon from '../../assets/star-shape.svg';

function MovieItem() {
	return (
		<article className={styles.movieItem}>
			<div className={styles.rateBadge}>
				<img src={starIcon} />
				<span>7.8</span>
			</div>
			<div className={styles.posterContainer}>
				<img
					src="https://img.fruugo.com/product/8/14/14592148_max.jpg"
					className={styles.poster}
				/>
			</div>
			<div className={styles.movieDetails}>
				<h2>Inception</h2>
				<p>2015</p>
			</div>
		</article>
	)
}

export default MovieItem
