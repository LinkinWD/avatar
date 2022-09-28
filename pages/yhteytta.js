import Image from 'next/image';

import Form from '../components/Form';

import Button from '../components/Button';

const Yhteytta = () => {
	return (
		<section>
			<div>
				<Form />
				<Image src="/img/portfolioqr.png" height={200} width={200} alt="qrkoodi" />
			</div>
		</section>
	);
};

export default Yhteytta;
