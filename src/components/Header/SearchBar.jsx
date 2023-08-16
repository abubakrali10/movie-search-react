import styles from './SearchBar.module.css';
import searchIcon from '../../assets/icons8-search.svg';
import { useState } from 'react';

function SearchBar() {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearch = (e) => {
		setSearchQuery(e.target.value);
	}

	return (
		<div className={styles.searchBar}>
			<form>
				<input
					type='text'
					placeholder='Search for movies...'
					value={searchQuery}
					onChange={handleSearch}
				/>
				<button type="submit" className={styles.searchButton}>
					<img
						src={searchIcon}
						alt='search icon'
						className={styles.searchIcon} 
					/>
				</button>
			</form>
		</div>
	)
}

export default SearchBar
