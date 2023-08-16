import styles from './SearchBar.module.css';
import searchIcon from '../../assets/icons8-search.svg';

function SearchBar() {
	return (
		<div className={styles.searchBar}>
			<form>
				<input type='text' placeholder='Search for movies...' />
				<img src={searchIcon} alt='search icon' className={styles.searchIcon} />
			</form>
		</div>
	)
}

export default SearchBar
