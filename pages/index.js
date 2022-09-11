import Head from 'next/head';
import Hero from '../components/Hero';
import Main from '../components/Main';

export default function Home() {
	return (
		<main>
			<Head>
				<title>Portfolio</title>
				<meta name="description" content="Ohjelmistokehittäjä" />
				<meta name="author" content="Jarmo Lindströn" />
				<meta
					name="keywords"
					content="HTML, CSS, JavaScript, nextjs, react, front-end, frontend, ui desing, käyttöliittymä suunnittelu, ohjelmistokehittöjä, hämeenlinna, linkinwd, jarmo lindström"
				/>
				<meta name="robots" content="noindex" />
			</Head>
			<Hero />
			<Main />
		</main>
	);
}
