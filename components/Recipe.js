import Image from 'next/image';

const Recipe = ({ resepti }) => {
	const { title, introduction, rawPicture, ingredients, cookingTime, method, donePicture } = resepti.fields;
	console.log(method);
	return (
		<article>
			<h3>{title}</h3>
			<p>{introduction}</p>
			<Image src={`https://${rawPicture.fields.file.url}`} width={400} height={400} alt={title} />
			{ingredients.map((mauste) => {
				return (
					<p key={mauste}>
						<i>{mauste}</i>
					</p>
				);
			})}
			<p>Valmistusaika: n.{cookingTime}</p>
            {}
			<Image src={`https://${donePicture.fields.file.url}`} width={400} height={400} alt={title} />
		</article>
	);
};

export default Recipe;
