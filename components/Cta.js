import { useEffect, useState } from 'react';

import styles from '../styles/Cta.module.css';

import { useGlobalContext } from '../context';

const Cta = () => {
	const sanat = [ 'Scrollaa', 'Alas', 'Tai', 'paina', 'minua' ];
	const [ currentWord, setCurrentWord ] = useState('Scrollaa');
	let luku = 0;
	useEffect(() => {
		const ajastin = setInterval(() => {
			setCurrentWord(sanat[luku]);

			luku++;
			if (luku === 5) {
				luku = 0;
			}
		}, 1000);
		return () => clearInterval(ajastin);
	}, []);

	//scrollRef on globaali, käytetään kahdessa componentissa. CTA ja Main
	const { scrollRef } = useGlobalContext();
	const executeScroll = () => scrollRef.current.scrollIntoView();

	return (
		<button onClick={executeScroll} className={styles.btn}>
			{currentWord}
		</button>
	);
};

export default Cta;
