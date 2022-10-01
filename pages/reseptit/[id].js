import { createClient } from 'contentful';
import Link from 'next/link';
import Head from 'next/head';
//componentit
import Loading from '../../components/Loading';
import Recipe from '../../components/Recipe';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE,
	accessToken: process.env.CONTENTFUL_ACCESS_KEY
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: 'resepti'
	});

	const paths = res.items.map((item) => {
		return {
			params: { id: item.fields.id }
		};
	});

	return {
		paths,
		fallback: true
	};
};

export async function getStaticProps({ params }) {
	const { items } = await client.getEntries({
		content_type: 'resepti',
		'fields.id': params.id
	});

	if (!items.length) {
		return {
			redirect: {
				destination: '/reseptit',
				pernament: false
			}
		};
	}
	return {
		props: {
			resepti: items[0]
		},
		revalidate: 1
	};
}

const Reseptit = ({ resepti }) => {
	if (!resepti) return <Loading />;

	return (
		<section>
			<Head>
				<title>{resepti.title}</title>
				<meta name="description" content="Resepti" />
				<meta name="author" content="Jarmo Lindströn" />
				<meta
					name="keywords"
					content="ruoka, halpa, pula-aika, resepti, ohjelmistokehittöjä, hämeenlinna, linkinwd, jarmo lindström"
				/>
			</Head>
			<Recipe resepti={resepti} />
		</section>
	);
};

export default Reseptit;
