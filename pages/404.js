import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NotFound = () => {
	const router = useRouter();
	//automaattinen takaisin siirto 3 sekunnissa
	useEffect(() => {
		let myTimeout = setTimeout(() => {
			router.push('/');
		}, 3000);
		//mikäli vierailija painaa jotain navigaatio linkki tai siirtyy pois 404 sivulta, ennen ajan loppumista, siirto koti sivulle ei enää taphdu.
		return () => {
			clearTimeout(myTimeout);
		};
	});

	return (
		<div>
			<h2>404</h2>
			<h2>Etsimäänne sivua ei löytynyt</h2>
			<h3>
				Sinut ohjataan takaisin
				<Link href="/">
					<a> Koti </a>
				</Link>
				sivulle kolmessa sekunnissa.
			</h3>
		</div>
	);
};

export default NotFound;
