import { createClient } from 'contentful';
import Link from 'next/link';
import Image from 'next/image';

import Recipe from '../../components/Recipe';

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
		}
	};
}

const Reseptit = ({ reseptit }) => {
	66;
	return (
		<main>
			<h2>Koodaava kokki-blogi</h2>
			<div>
				<p>
					Tervetuloa pula-ajan ruokalaan. Ei nyt suoranaisesti, mutta täällä tehdään pienellä budjetilla
					erilaisia ruokaratkaisuja ja yritään löytään arjen säästöjä.
				</p>
				<p>
					Kaikki reseptit ovet suuntaa antavia ja niitä ei olekkaan tehty orjallisesti noudatettavaksi, vaan
					antamaan ideoita ja visioita erilaisiin ruoka kokemuksiin ja pieniin säästöihin, siltä varalta,
					ettei ole sellaisia vielä itse käyttänyt.
				</p>
			</div>
			<div className="container">
				<div>
					<ul>
						{reseptit.map((resepti) => {
							const { title, id, donePicture } = resepti.fields;
							return (
								<li>
									<Link href={'/reseptit/' + id} key={id}>
										<a>
											Tutustu reseptiin: {title}
											<Image
												src={`https://${donePicture.fields.file.url}`}
												width={100}
												height={100}
												alt={title}
											/>
										</a>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</main>
	);
};

export default Reseptit;
