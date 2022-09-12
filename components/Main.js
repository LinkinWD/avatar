import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Main.module.css';

const Main = () => {
	return (
		<section className={styles.section}>
			<div className={styles.text}>
				<h3>Jaa mää vain?</h3>
				<p>
					Tervetuloa sivuilleni, olen entinen ammattikokki ja nykyään ohjelmisto kehittäjä. Asustelen tällä
					hetkellä Hattulassa, mutta koska työni on mahdollista tehdä myös etänä, niin sillä ei pitäisi olla
					niinkään väliä.
				</p>
				<p>
					Olen niin sanottu front-end, eli suunnittelen verkkosivujen ulkonäköjä ja teen niin asiakkaani
					kanssa/ehdoilla ja palveluihini voi tutustua kohdasta freelancer tai sitten siirtymällä sinne
					<span className={styles.span}>
						<Link href="/freelancer">
							<a> tästä</a>
						</Link>
					</span>
				</p>
				<p>
					Tosin yksinkertaiset back-end ratkaisutkin ovat mahdollisia, kuten esim blogit. Sivuilleni olenkin
					luonut muutaman tälläisen erilaisen vaihtoehdon. Sieltä löytyy blogi, yhdistetty verkkokauppa ja
					kommentti seinä.
				</p>
				<p>Tervetuloa vielä uudestaan tutustumaan.</p>
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
