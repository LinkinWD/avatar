import Image from 'next/image';

import styles from '../styles/Main.module.css';

const Main = () => {
	return (
		<section className={styles.section}>
			<div className={styles.text}>
				<h3>Jaa mää vain?</h3>
			</div>
			<div className={styles.picture}>
				<Image src="/img/me2.png" width={400} height={400} alt="Oma kuva" />
			</div>
		</section>
	);
};

export default Main;
