import { useState } from 'react';
import { createClient } from 'contentful';
import RecipeCard from '../../components/RecipeCard';
import Head from 'next/head';
import Image from 'next/image';
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
	const [ inputValue, setInputValue ] = useState();
	const [ message, setMessage ] = useState(false);

	return (
		<section className={styles.blog}>
			<Head>
				<title>Pula-aika Blogi</title>
				<meta name="description" content=" Ruokaideoita ja toteutusta halvalla" />
				<meta name="author" content="Jarmo Lindströn" />
				<meta
					name="keywords"
					content="ruoka, halpa, pula-aika, resepti, ohjelmistokehittöjä, hämeenlinna, linkinwd, jarmo lindström"
				/>
			</Head>
			<h2 className={styles.header}>Pula-aika blogi</h2>
			<article className={styles.article}>
				<div className={styles.text_div}>
					<p>
						Tervetuloa pula-ajan ruokalaan. Ei nyt suoranaisesti, mutta täällä tehdään pienellä budjetilla
						erilaisia ruokaratkaisuja ja yritään löytään arjen säästöjä.
					</p>
					<p>
						Kaikki reseptit ovet suuntaa antavia ja niitä ei olekkaan tehty orjallisesti noudatettavaksi,
						vaan antamaan ideoita ja visioita erilaisiin ruoka kokemuksiin ja pieniin säästöihin, siltä
						varalta, ettei ole sellaisia vielä itse käyttänyt.
					</p>
					<p>
						Tarkkoja raseptejä on netti pullollaan, täältä etsitään visioita ja innostusta ikuiseen
						kysymykseen. <span>Mitä tänään syötäisiin?</span>
					</p>
				</div>
				<div className={styles.image_div}>
					<Image src="/img/ruokakori.jpg" height={500} width={500} alt="Ruokakori" />
				</div>
			</article>
			<section className={styles.news_letter}>
				<p>
					Uusia reseptejä tulee noin kaksi kuukaudessa. Mikäli haluat ilmoituksen, kun uusi saapuu, jätä
					sähköposti osoitteesi
				</p>
				{!message && (
					<form>
						<p>
							<label htmlFor="email">Sähköpostiosoite:</label>
							<input
								type="email"
								required
								name="email"
								id="email"
								onChange={(e) => setInputValue(e.target.value)}
							/>
						</p>

						<button type="submit" onClick={() => setMessage(true)}>
							lähetä
						</button>
					</form>
				)}
				{message && <p className={styles.thank_you}>Kiitos tilauksesta.</p>}
			</section>

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
