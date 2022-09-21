import { useGlobalContext } from '../context';

import styles from '../styles/Button.module.css';

const Button = ({ text, funct }) => {
	const { side } = useGlobalContext();

	return (
		<button onClick={funct === 'none' ? '' : side} className={styles.btn}>
			{text}
		</button>
	);
};

export default Button;
