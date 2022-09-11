import Head from 'next/head';
import Hero from '../components/Hero';
import Main from '../components/Main';

export default function Home() {
	return (
		<main>
			<Head>
				<title>Portfolio</title>
				<meta name="description" content="Ohjelmistokehittäjä" />
			</Head>
			<Hero />
			<Main />
		</main>
	);
}
