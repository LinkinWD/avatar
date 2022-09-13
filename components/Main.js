import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Main.module.css';

const Main = () => {
	return (
		<section className={styles.section}>
			<div className={styles.text}>
				<h3>Jaa mää vain?</h3>
				<p>
					Tervetuloa! Linkin wed desings suunnittelee ja toteuttaa persoonallisia kotisivuja ihmisten
					erilaisiin tarpeisiin. Jos etsit freelanceria toteuttamaan unelmiesi kotisivut, niin voit tutustua
					palvelun tarjontaani
					<span className={styles.span}>
						<Link href="/freelancer">
							<a> täältä</a>
						</Link>
					</span>
				</p>
				<p>
					Tosin sivuiltani läytyy muutakin. Entisenä ammattikokkina ajattelin alkaa tekemään pula-aika blogia.
					Kehittelen siellä ihan kauppa reissuillani jotain kohtalaisen halpaa ruokaa ja annan ideoita
					ruuanlaittoon.
				</p>
				<p>Testissä on myös pieni Vintage verkkokauppa, jossa myydään muutamia posliini esineitä.</p>
			</div>

			<div className={styles.picture_box}>
				<div className={styles.picture}>
					<Image src="/img/me.png" width={400} height={400} alt="Oma kuva" />
				</div>
			</div>
		</section>
	);
};

export default Main;
