import Head from 'next/head';
import Hero from '../components/Hero';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

export default function Home() {
	return (
		<main className="main">
			<Head>
				<title>LinkinWD</title>
				<meta name="description" content="Ohjelmistokehittäjä" />
				<meta name="author" content="Jarmo Lindströn" />
				<meta
					name="keywords"
					content="HTML, CSS, JavaScript, nextjs, react, front-end, frontend, ui desing, käyttöliittymä suunnittelu, ohjelmistokehittöjä, hämeenlinna, linkinwd, jarmo lindström"
				/>
			</Head>

			<Hero />
			<Main />
		</main>
	);
}
