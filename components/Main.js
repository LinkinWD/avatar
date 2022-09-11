import Image from 'next/image';

import styles from '../styles/Main.module.css';

const Main = () => {
	return (
		<section className={styles.section}>
			<h2>Who me?</h2>
			<Image src="/img/me2.png" width={400} height={400} alt="Oma kuva" />
		</section>
	);
};

export default Main;
