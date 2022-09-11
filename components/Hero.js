import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

const Header = () => {
	const [ offsetY, setOffsetY ] = useState(0);

	const handleScroll = () => setOffsetY(window.pageYOffset);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<section className={styles.container}>
			<div className={styles.background}>
				<Image src="/img/vuori.png" layout="fill" alt="taustakuva" />
				<div className={styles.kallio}>
					<Image
						src="/img/kallio.png"
						layout="fill"
						alt="kallio"
						style={{ transform: `translateY(${-offsetY * 0.15}px) `, position: 'absolute' }}
					/>
				</div>
				<div className={styles.header} style={{ transform: `translateY(${offsetY * 0.5}px) ` }}>
					<h1>Jarmo Lindström</h1>
					<h3>Ohjelmistokehittäjä</h3>
				</div>
			</div>
		</section>
	);
};

export default Header;
