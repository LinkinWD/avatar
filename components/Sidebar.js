import NavLinks from './NavLinks';

import styles from '../styles/Sidebar.module.css';

import { useGlobalContext } from '../context';

const Sidebar = () => {
	const { isSidebarOpen, i } = useGlobalContext();

	return (
		<section>
			<div className={`${styles.sidebar_area} ${isSidebarOpen ? styles.open : ''}`}>
				<div className={styles.header}>
					<p>Navigaation</p>
				</div>
				<NavLinks />
			</div>
		</section>
	);
};

export default Sidebar;
