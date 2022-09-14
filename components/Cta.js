import styles from '../styles/Cta.module.css';

import { useGlobalContext } from '../context';

const Cta = () => {
	//scrollRef on globaali, käytetään kahdessa componentissa. CTA ja Main
	const { scrollRef } = useGlobalContext();
	const executeScroll = () => scrollRef.current.scrollIntoView();

	return (
		<button onClick={executeScroll} className={styles.btn}>
			Tutustu
		</button>
	);
};

export default Cta;
