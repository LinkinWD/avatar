import Head from 'next/head';
import Hero from '../components/Hero';
import Main from '../components/Main';

export default function Home() {
	return (
		<main className="main">
			<Head>
				<title>LinkinWD</title>
				<meta name="description" content="Linkinwd" />
				<meta name="author" content="Jarmo Lindströn" />
				<meta
					name="keywords"
					content="HTML, CSS, JavaScript, nextjs, react, front-end, frontend, ui desing, käyttöliittymä suunnittelu, ohjelmistokehittöjä, hämeenlinna, linkinwd, jarmo lindström, linkin web designs"
				/>
			</Head>

			<Hero />
			<Main />
		</main>
	);
}
