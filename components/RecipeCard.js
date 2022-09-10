import Link from 'next/link';
import Image from 'next/image';

const RecipeCard = ({ id, title, donePicture }) => {
	return (
		<article>
			<Link href={'/reseptit/' + id}>
				<a>
					Tutustu reseptiin: {title}
					<Image src={`https://${donePicture.fields.file.url}`} width={100} height={100} alt={title} />
				</a>
			</Link>
		</article>
	);
};

export default RecipeCard;
