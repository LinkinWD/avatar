import { createClient } from 'contentful';
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
		fallback: false
	};
};

export async function getStaticProps({ params }) {
	const { items } = await client.getEntries({
		content_type: 'resepti',
		'fields.id': params.id
	});
	return {
		props: {
			resepti: items[0]
		},
		revalidate: 1
	};
}

const Reseptit = ({ resepti }) => {
	return (
		<section>
			<Recipe resepti={resepti} />
		</section>
	);
};

export default Reseptit;
