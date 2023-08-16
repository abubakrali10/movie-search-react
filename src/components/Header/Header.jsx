import Logo from './Logo';
import styles from './Header.module.css';
import SearchBar from './SearchBar';

function Header() {
	return (
		<header className={styles.header}>
			<Logo />
			<SearchBar />
		</header>
	)
}

export default Header
