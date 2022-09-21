import { useState } from 'react';
import Image from 'next/image';

import styles from '../styles/Mina.module.css';

const Mina = () => {
	const [ turning, setTurning ] = useState(false);

	const side = () => {
		setTurning(!turning);
	};
	return (
		<section className={styles.section}>
			<header className={styles.header}>
				<h2>Mies LinkinWD:n takana</h2>
			</header>
			<div className={styles.container}>
				<div className={styles.picture_container}>
					<picture>
						<Image src="/img/piirosoma.png" width={300} height={300} alt="Piirros minusta" />
					</picture>
					<picture>
						<Image src="/img/piirrossilppu.png" width={300} height={300} alt="Piirros minusta" />
					</picture>
				</div>
				<article className={`${styles.article} ${turning ? styles.turn : ''}`}>
					<div className={styles.front_text}>
						<p>
							Jo kypsään ikään kasvanut miehen kloppi: Mies joka nuorena haaveili joko olevansa kokki tai
							ohjelmoija. Vanhemmilla oli toiset suunnitelmat, joten nuoruus tuli eletyä ja vanhemmiten
							opiskeltua useita kokkitutkinto ja työskennelty sellaisena. Kolme vuotta sitten astui
							kuvioon koira vauvveli, ensimmäinen lapseni, joka tarvitsi myös huomiotani. Ikääkin oli jo
							aikuisen verran ja ajattelin, vaihtaa fyysisesti kevyempään ammattiin ja seurata toista
							nuoruuden haavettani kohde.
						</p>
						<button onClick={side}>käännä</button>
					</div>
					<div className={styles.back_text}>
						<p>
							Oli helppoa opiskella, kun tiesi vastauksen kysymykseen &quot;Mitä sinusta tulee
							isona?&quot;, jo mennessä kouluun ja pystyi keskittymään siihen mikä merkitsee.
						</p>
						<button onClick={side}>käännä</button>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Mina;
