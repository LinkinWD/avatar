import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Hero.module.css';
import Cta from './Cta';

import { useGlobalContext } from '../context';

const Header = ({ me }) => {
	const { id } = useGlobalContext();
	//asetetaan scrollauksen kuuntelija.
	const [ offsetY, setOffsetY ] = useState(0);

	const handleScroll = () => setOffsetY(window.pageYOffset);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		//estetään muistipaot ja poistetaan tapahtuman kuuntelija, mikäli
		//poitutaan sivulta
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);
	return (
		<section className={styles.container}>
			<div className={styles.background}>
				<Image src="/img/vuori.png" layout="fill" alt="taustakuva" priority={true} />
				<div className={styles.kallio}>
					<Image
						src="/img/kallio.png"
						layout="fill"
						alt="kallio"
						style={{ transform: `translateY(${-offsetY * 0.2}px) `, position: 'absolute' }}
					/>
				</div>
				<div className={styles.header} style={{ transform: `translateY(${offsetY * 0.5}px) ` }}>
					<h1>Linkin Web Desings</h1>
					<h3>Persoonallisia verkkoratkaisuja</h3>
				</div>
				<div className={styles.cta_div}>
					<Cta />
				</div>
			</div>
		</section>
	);
};

export default Header;
