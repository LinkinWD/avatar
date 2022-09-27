import Image from 'next/image';

import Button from '../components/Button';

const Yhteytta = () => {
	return (
		<section>
			<div>
				<Image src="/img/portfolioqr.png" height={300} width={300} alt="" qrkoodi />
			</div>
		</section>
	);
};

export default Yhteytta;
