import styles from '../styles/Loading.module.css';

const Loading = () => {
	return (
		<main className={styles.loading}>
			<div className={styles.header} />
			<div className={styles.text} />
			<div className={styles.image} />
		</main>
	);
};

export default Loading;
