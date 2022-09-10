import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Recipe = ({ resepti }) => {
	const { title, introduction, rawPicture, ingredients, cookingTime, method, donePicture } = resepti.fields;
	
	return (
		<article>
			<h3>{title}</h3>
			<p>{introduction}</p>
			<Image src={`https:${rawPicture.fields.file.url}`} width={rawPicture.fields.file.details.image.width} height={rawPicture.fields.file.details.image.height} alt={title} />
			<div>
				<h3>Ainesosat</h3>
			{ingredients.map((mauste) => {
				return (
					<p key={mauste}>
						<i>{mauste}</i>
					</p>
				);
			})}
			</div>
			<p>Valmistusaika: n.{cookingTime}</p>
            {}
			<Image src={`https:${donePicture.fields.file.url}`} width={donePicture.fields.file.details.image.width} height={donePicture.fields.file.details.image.height} alt={title} />
			<div>
				<h3>Ohjeet</h3>
				<div>
					{documentToReactComponents(method)}
				</div>
			</div>
		</article>
	);
};

export default Recipe;
