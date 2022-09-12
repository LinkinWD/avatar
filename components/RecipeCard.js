import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/RecipeCard.module.css';

const RecipeCard = ({ id, title, donePicture }) => {
	return (
		<li className={styles.recipe_card}>
			<Link href={'/reseptit/' + id}>
				<a>
					{title}
					<Image src={`https:${donePicture.fields.file.url}`} width={100} height={100} alt={title} />
				</a>
			</Link>
		</li>
	);
};

export default RecipeCard;
