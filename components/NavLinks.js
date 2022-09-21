import Link from 'next/link';
import styles from '../styles/NavLinks.module.css';

import { useGlobalContext } from '../context';

const NavLinks = () => {
	const { closeSidebar } = useGlobalContext();
	return (
		<ul className={styles.ul}>
			<li className={styles.li} onClick={closeSidebar}>
				<Link href="/">
					<a>Koti</a>
				</Link>
			</li>
			<li className={styles.li} onClick={closeSidebar}>
				<Link href="/mina">
					<a>Minä</a>
				</Link>
			</li>

			<li className={styles.li} onClick={closeSidebar}>
				<Link href="/freelancer">
					<a>Freelancer</a>
				</Link>
			</li>
			<li className={styles.li} onClick={closeSidebar}>
				<Link href="/reseptit">
					<a>pula-aika blogi</a>
				</Link>
			</li>

			<li className={styles.li} onClick={closeSidebar}>
				<Link href="/yhteytta">
					<a>Ota yhteyttä</a>
				</Link>
			</li>
		</ul>
	);
};

export default NavLinks;
