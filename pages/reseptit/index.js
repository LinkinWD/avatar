import { createClient } from 'contentful';
import RecipeCard from '../../components/RecipeCard';
import Head from 'next/head';
import styles from '../../styles/Reseptit.module.css';

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
		<section className={styles.blog}>
			<Head>
				<title>Blogi</title>
				<meta name="description" content="Pula-aika blogi. ruokaideoita ja toteutusta halvalla" />
				<meta name="author" content="Jarmo Lindströn" />
				<meta
					name="keywords"
					content="ruoka, halpa, pula-aika, resepti, ohjelmistokehittöjä, hämeenlinna, linkinwd, jarmo lindström"
				/>
			</Head>
			<div className={styles.text_div}>
				<h2>Pula-aika blogi</h2>
				<p>
					Tervetuloa pula-ajan ruokalaan. Ei nyt suoranaisesti, mutta täällä tehdään pienellä budjetilla
					erilaisia ruokaratkaisuja ja yritään löytään arjen säästöjä.
				</p>
				<p>
					Kaikki reseptit ovet suuntaa antavia ja niitä ei olekkaan tehty orjallisesti noudatettavaksi, vaan
					antamaan ideoita ja visioita erilaisiin ruoka kokemuksiin ja pieniin säästöihin, siltä varalta,
					ettei ole sellaisia vielä itse käyttänyt.
				</p>
				<p>
					Tarkkoja raseptejä on netti pullollaan, täältä etsitään visioita ja innostusta ikuiseen kysymykseen.{' '}
					<span>Mitä tänään syötäisiin?</span>
				</p>
			</div>
			<div className={styles.recipe_div}>
				<h3>Reseptit</h3>
				<div className={styles.recipe_area}>
					<ul>
						{reseptit.map((resepti) => {
							const { title, id, donePicture } = resepti.fields;
							return <RecipeCard id={id} title={title} donePicture={donePicture} key={id} />;
						})}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Reseptit;
