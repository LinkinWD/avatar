import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Main.module.css';

import { useGlobalContext } from '../context';

const Main = () => {
	//scrollRef on globaali, käytetään kahdessa componentissa. CTA ja Main
	const { scrollRef } = useGlobalContext();
	return (
		<section className={styles.section} ref={scrollRef}>
			<div className={styles.text}>
				<h3>Sisältö</h3>
				<p>
					Tervetuloa Linkin wed desings:in kotisivuille. LinkinWD suunnittee ja toteutaa persoonallisia
					kotisivuja ihmisten erilaisiin tarpeisiin. Jos etsit freelanceria saataisi toteuttaa unelmiesi
					kotisivut, niin voit tutustua minuun lisää ja palvelun tarjontaani
					<span className={styles.span}>
						<Link href="/freelancer">
							<a> täältä. </a>
						</Link>
					</span>
					LinkinWD luo verkkosivuja koodaamalla, joten pystyn toteuttamaan sellaista kotisivukone editorit
					eivät ehkä pysty. Osaan kyllä käyttää niitäkin.
				</p>
				<br />
				<p>
					Entiseltä ammatiltani olen ammattikokki, joten sivuiltani löytyy muutakin. Entisenä kokkina
					ajattelin alkaa tekemään pula-aika blogia. Kehittelen siellä ihan jotain kohtalaisen halpaa ruokaa
					ja annan ideoita ruuanlaittoon.
				</p>
				<br />

				<p>
					Mikäli taas etsit työntekijää, front-end react junior koodaria, niin tutustu
					<a href="https://www.jarmonportfolio.fi/"> portfoliooni.</a>
				</p>
			</div>
			<div className={styles.picture_box}>
				<div className={styles.picture}>
					<Image src="/img/coding.jpg" width={500} height={500} alt="Oma kuva" />
				</div>
			</div>
		</section>
	);
};

export default Main;
