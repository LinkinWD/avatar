import Head from 'next/head';
import Hero from '../components/Hero';
import Main from '../components/Main';

export default function Home() {
	return (
		<main className="main">
			<Head>
				<title>LinkinWD</title>
				<meta name="description" content="Freelancer portfolio frontend kehittäjältä." />
				<meta name="author" content="Jarmo Lindströn" />
				<meta
					name="keywords"
					content="HTML, CSS, JavaScript, nextjs, react, front-end, frontend, ui desing, käyttöliittymä suunnittelu, ohjelmistokehittöjä, hämeenlinna, linkinwd, jarmo lindström, linkin web designs"
				/>
				<meta name="google-site-verification" content="0kzEqL01zbUw9SOW54p-g9mKZRqhj9msmTUk_96y-x4" />
			</Head>

			<Hero />
			<Main />
		</main>
	);
}
