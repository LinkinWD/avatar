import { useState } from 'react';
import { createClient } from 'contentful';

import Head from 'next/head';
import Image from 'next/image';

import RecipeCard from '../../components/RecipeCard';
import { ValidateEmail } from '../../utils/validate';

import styles from '../../styles/Reseptit.module.css';
import axios from 'axios';

//yhdistetään contentful ja haetaan reseptit array
export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY
	});

	const res = await client.getEntries({
		content_type: 'resepti',
		order: 'sys.createdAt'
	});

	return {
		props: {
			reseptit: res.items
		},
		revalidate: 1
	};
}

const Reseptit = ({ reseptit }) => {
	const [ message, setMessage ] = useState(false);
	const [ error, setError ] = useState('');
	const [ query, setQuery ] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		const email = Object.fromEntries(data.entries());
		let result = ValidateEmail(email);
		if (result === false) {
			setError('Olet laittanut hassun sähköposti osoitteen');
			return false;
		} else if (result === true) {
			try {
				await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/email`, email);
			} catch (error) {
				console.log(error);
			}
			setError('');
			setMessage(true);
		}
	};

	const filteredRecipes = reseptit.filter((resepti) => {
		return resepti.fields.title.toLowerCase().includes(query.toLowerCase());
	});

	return (
		<section className={styles.blog}>
			<Head>
				<title>Ruoka-aika Blogi</title>
				<meta name="description" content=" Ruokaideoita ja toteutusta halvalla" />
				<meta name="author" content="Jarmo Lindströn" />
				<meta
					name="keywords"
					content="ruoka, halpa, pula-aika, resepti, ohjelmistokehittöjä, hämeenlinna, linkinwd, jarmo lindström"
				/>
			</Head>
			<h2 className={styles.header}>Ruoka-aika blogi</h2>
			<article className={styles.article}>
				<div className={styles.text_div}>
					<p>
						Tervetuloa halpis ruokalaan. Täällä tehdään pienellä budjetilla erilaisia ruokaratkaisuja ja
						yritään löytään arjen säästöjä.
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
					<br />
					<p>
						Kaikki on tekojärjestyksessä, vanhimmasta alkaen ja mikäli reseptin nimen perässä on (-v) niin
						siitä on helppo tehdä vegaanin versio. Hakusanalla -v löydät nämä kaikki.
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
					<form onSubmit={handleSubmit}>
						<p>
							<label htmlFor="email">Sähköposti osoite:</label>
							<input type="email" required name="email" id="email" />
						</p>

						<button type="submit">lähetä</button>
					</form>
				)}
				{message && <p className={styles.thank_you}>Kiitos tilauksesta.</p>}
				<p className={styles.error}>{error}</p>
			</section>

			<div className={styles.recipe_div}>
				<h3>Reseptit</h3>
				<br />
				<form className={styles.search}>
					<p>
						Hae
						<input value={query} onChange={(e) => setQuery(e.target.value)} type="text" />
					</p>
				</form>

				<div className={styles.recipe_area}>
					<ul>
						{filteredRecipes.map((resepti) => {
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
