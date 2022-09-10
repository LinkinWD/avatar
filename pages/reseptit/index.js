import { createClient } from 'contentful';

import Recipe from '../../components/Recipe';
import RecipeCard from '../../components/RecipeCard';

//yhdistetään contentful ja haetaan reseptit array
export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY
	});

	const res = await client.getEntries({ content_type: 'resepti' });

	return {
		props: {
			reseptit: res.items
		},
		revalidate: 1
	};
}

const Reseptit = ({ reseptit }) => {
	66;
	return (
		<main>
			<h2>Koodaava kokki-blogi</h2>
			<div>
				<p>
					Tervetuloa pula-ajan ruokalaan. Ei nyt suoranaisesti, mutta täällä tehdään pienellä budjetilla
					erilaisia ruokaratkaisuja ja yritään löytään arjen säästöjä.
				</p>
				<p>
					Kaikki reseptit ovet suuntaa antavia ja niitä ei olekkaan tehty orjallisesti noudatettavaksi, vaan
					antamaan ideoita ja visioita erilaisiin ruoka kokemuksiin ja pieniin säästöihin, siltä varalta,
					ettei ole sellaisia vielä itse käyttänyt.
				</p>
			</div>
			<div className="container">
				<div>
					<ul>
						{reseptit.map((resepti) => {
							const { title, id, donePicture } = resepti.fields;
							return (
								<li key={id}>
									<RecipeCard id={id} title={title} donePicture={donePicture} />
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</main>
	);
};

export default Reseptit;
