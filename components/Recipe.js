import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from '../styles/Recipe.module.css';
import Button from './Button';

const Recipe = ({ resepti }) => {
	const { title, introduction, rawPicture, ingredients, cookingTime, method, donePicture } = resepti.fields;

	return (
		<article className={styles.article}>
			<div className={styles.header}>
				<h3>{title}</h3>
				<p>{introduction}</p>
			</div>
			<div className={styles.raw_picture}>
				<Image
					src={`https:${rawPicture.fields.file.url}`}
					width={rawPicture.fields.file.details.image.width}
					height={rawPicture.fields.file.details.image.height}
					alt={title}
				/>
			</div>
			<div className={styles.ingredients}>
				<h3>Ainesosat</h3>
				{ingredients.map((mauste) => {
					return (
						<p key={mauste}>
							<i>{mauste}</i>
						</p>
					);
				})}
			</div>
			<div className={styles.cooking_time}>
				<p>Kypsennys aika: n.{cookingTime} minuuttia.</p>
			</div>
			<div className={styles.done_picture}>
				<Image
					src={`https:${donePicture.fields.file.url}`}
					width={donePicture.fields.file.details.image.width}
					height={donePicture.fields.file.details.image.height}
					alt={title}
				/>
			</div>
			<div className={styles.method}>
				<h3>Ohjeet</h3>
				<div>{documentToReactComponents(method)}</div>
			</div>
			<Link href="/reseptit">
				<a>
					<Button text={'Palaa valikkoon'} funct={'none'} />
				</a>
			</Link>
		</article>
	);
};

export default Recipe;
