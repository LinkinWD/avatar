import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Portfolio</title>
				<meta name="description" content="Ohjelmistokehittäjä" />
			</Head>
			<h1>Homppeli</h1>
		</div>
	);
}
