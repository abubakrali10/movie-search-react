import styles from './SearchBar.module.css';
import searchIcon from '../../assets/icons8-search.svg';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
	const [searchQuery, setSearchQuery] = useState('');
  
	const handleSearch = (e) => {
	  setSearchQuery(e.target.value);
	}
  
	const handleSearchSubmit = (e) => {
	  e.preventDefault();
  
	  if (searchQuery.trim() === '') {
		return;
	  }
  
	  onSearch(searchQuery);
	}
  

	return (
		<div className={styles.searchBar}>
			<form onSubmit={handleSearchSubmit}>
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

SearchBar.propTypes = {
	onSearch: PropTypes.func.isRequired,
};  

export default SearchBar