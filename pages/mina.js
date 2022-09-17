import { useState } from 'react';
import Image from 'next/image';

import styles from '../styles/Mina.module.css';

const Mina = () => {
	return (
		<section className={styles.section}>
			<header>
				<h2>Mies LinkinWD:n takana</h2>
			</header>
			<div className="container">
				<article>
					<p>
						Jo kypsään ikään kasvanut miehen kloppi: Mies joka nuorena haaveili joko olevansa kokki tai
						ohjelmoija. Vanhemmilla oli toiset suunnitelmat, joten nuoruus tuli eletyä ja vanhemmiten
						opiskeltua useita kokkitutkinto ja työskennelty sellaisena. Kolme vuotta sitten astui kuvioon
						koira vauvveli, ensimmäinen lapseni, joka tarvitsi myös huomiotani. Ikääkin oli jo aikuisen
						verran ja ajattelin, vaihtaa fyysisesti kevyempään ammattiin ja seurata toista nuoruuden
						haavettani kohde.
					</p>
					<p>
						Oli helppoa opiskella, kun tiesi vastauksen kysymykseen "Mitä sinusta tulee isona?", jo mennessä
						kouluun ja pystyi keskittymään siihen mikä merkitsee.
					</p>
				</article>
				<div className={styles.picture_container}>
					<picture>
						<Image src="/img/piirrossilppu.png" width={400} height={400} alt="Piirros minusta" />
					</picture>
					<picture>
						<Image src="/img/piirosoma.png" width={400} height={400} alt="Piirros minusta" />
					</picture>
				</div>
			</div>
		</section>
	);
};

export default Mina;
