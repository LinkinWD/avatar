import Image from 'next/image';

import Form from '../components/Form';

import styles from '../styles/yhteytta.module.css';

const Yhteytta = () => {
	return (
		<section className={styles.section}>
			<div className={styles.email}>
				<h3>Jarmo Lindström</h3>
				<p>yaramodesu@gmail.com</p>
			</div>
			<div>
				<Form />
			</div>
			<div className={styles.qr}>
				<p>Tutustu työnhaku profiiliini</p>
				<Image src="/img/portfolioqr.png" height={200} width={200} alt="qrkoodi" />
			</div>
		</section>
	);
};

export default Yhteytta;
