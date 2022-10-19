import Head from 'next/head';
import Hero from '../components/Hero';
import Main from '../components/Main';

export default function Home() {
	return (
		<main className="main">
			<Head>
				<title>LinkinWD</title>
				<meta name="description" content="Freelancer frontend kehittäjä." />
				<meta name="author" content="Jarmo Lindströn" />
				<meta property="og:title" content="LinkinWD" />
				<meta property="og:image" content="https://ibb.co/DpNZsHX" />
				<meta property="og:description" content="Freelancer frontend kehittäjä" />
				<meta property="og:url" content="https://www.linkinwd.fi/" />
				<meta
					name="keywords"
					content="HTML, CSS, JavaScript, nextjs, react, front-end, frontend, ui desing, käyttöliittymä suunnittelu, ohjelmistokehittöjä, hämeenlinna, linkinwd, jarmo lindström, linkin web designs, freelacer for hire, ohjelmistokehittäjä etsii työtä, katinala, hattula"
				/>
				<meta name="google-site-verification" content="0kzEqL01zbUw9SOW54p-g9mKZRqhj9msmTUk_96y-x4" />
			</Head>

			<Hero />
			<Main />
		</main>
	);
}
