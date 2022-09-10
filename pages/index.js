import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
	const [ offsetY, setOffsetY ] = useState(0);

	const handleScroll = () => setOffsetY(window.pageYOffset);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<main>
			<Head>
				<title>Portfolio</title>
				<meta name="description" content="Ohjelmistokehittäjä" />
			</Head>
			<div className={styles.container} style={{ transform: `translateY(${offsetY * 1.1}px)` }}>
				<div className="header">
					<h1>Jarmo Lindströn</h1>
					<h2>Ohjelmistokehittäjä</h2>
				</div>
				<div className={styles.background_image}>
					<Image
						src="/img/vuori.jpg"
						width={1500}
						height={1000}
						alt="vuorimaisema"
						style={{ transform: `translateY(${offsetY * 0.9}px)` }}
					/>
				</div>
				<div className={styles.front_image}>
					<Image
						src="/img/kallio.png"
						width={1500}
						height={1000}
						alt="vuoren kallio"
						style={{ transform: `translateY(${offsetY * 0.7}px)` }}
					/>
				</div>
			</div>
		</main>
	);
}
