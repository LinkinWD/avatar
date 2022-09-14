import styles from '../styles/Freelancer.module.css';
import Image from 'next/image';

const Freelancer = () => {
	return (
		<main className={styles.main}>
			<section>
				<div className={styles.header}>
					<h2>Freelancer</h2>
				</div>
				<div className="text">
					<p>tekst</p>
				</div>
				<div>
					<h3>Kuukausi hinnat</h3>
					<p>
						Itse käytän pääasiassa näitä, koska ne tukevat moderneja ratkaisuja luontevasti ja niissä on
						valmiina SSL, mutta tietenkin muistakin verkkosivujen sivoituspaikasta voidaan neuvotella.
					</p>
					<div className={styles.price_section}>
						<div className={styles.price}>
							<h4>Github</h4>
							<div className={styles.circle}>
								<div className={styles.inner_circle}>0$</div>
							</div>

							<a href="https://pages.github.com/">Github pages</a>
						</div>
						<div className={styles.price}>
							<h4>Netlify</h4>
							<div className={styles.circle}>
								<div className={styles.inner_circle}>19$</div>
							</div>
							<a href="https://www.netlify.com/pricing/">Netlify hinnasto</a>
						</div>
						<div className={styles.price}>
							<h4>Vercel</h4>
							<div className={styles.circle}>
								<div className={styles.inner_circle}>20$</div>
							</div>
							<a href="https://vercel.com/pricing?utm_source=google&utm_medium=cpc&utm_campaign=17166484772&utm_campaign_id=17166484772&utm_term=vercel&utm_content=134252114617_596484707963&gclid=CjwKCAjw1ICZBhAzEiwAFfvFhFEx-poQPUHnXZ8Pjdy2MqvxhN1wlIvoPZpWnxiSv2WvaBh4L5bRqBoCjw0QAvD_BwE">
								Vercel hinasto
							</a>
						</div>
					</div>
				</div>
				<div className={styles.header}>
					<h4>Ja muista tarvittaessa</h4>
				</div>
				<div className="image">
					<Image src="/img/mobile.png" height={400} width={300} alt="tyttö kännykässä" />
				</div>
			</section>
		</main>
	);
};

export default Freelancer;
