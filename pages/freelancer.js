import styles from '../styles/Freelancer.module.css';
import Image from 'next/image';
import Head from 'next/head';

const Freelancer = () => {
	return (
		<main className={styles.main}>
			<Head>
				<title>LinkinWD</title>
				<meta name="description" content="Linkinwd" />
				<meta name="author" content="Jarmo Lindströn" />
				<meta
					name="keywords"
					content="HTML, CSS, JavaScript, nextjs, react, front-end, frontend, ui desing, käyttöliittymä suunnittelu, ohjelmistokehittöjä, hämeenlinna, linkinwd, jarmo lindström, linkin web designs"
				/>
			</Head>
			<section>
				<div className={styles.header}>
					<h2>Freelancer</h2>
				</div>
				<div className={styles.text}>
					<div className={styles.flex_div}>
						<h2>Minä, freelancer...</h2>
						<p>
							Olen front-end kehittäjä, joka tarkoittaa minun keskittyvän verkkosivujen näkytvään osaan
							pääasiallisesti.
						</p>
						<p>
							Hallitsen myös jonkin verran sitä mitä tapahtuu kulissien takana, mikäli jotain pientä
							blogia tai itse täytettävää osiota tarvitaa sivuille. Myöskin kuvanmuokkaus järjestyy.
						</p>
						<p>
							Tarkoituksena on tehdä sivuja, joita ei tarvitse ylläpitää ja niistä ei tule muita
							lisäkustannuksia minun puoeltani, jollei niitä sitten tilata myöhemmin.
						</p>
					</div>

					<div className={styles.flex_div}>
						<h3>Työn hinta</h3>
						<p>
							Aloittelevana ja työtäetsivänä en paljoakaan vielä veloita, mutta hinnat tulevat nousemaan
							tulevaisuudessa. Työskentelen joko tunti veloituksella tai sopimuksen mukaan.
						</p>
						<div className={styles.work_prices}>
							<div className={styles.palkka}>
								<p>Tuntipalkka:</p>
								<p>20€</p>
							</div>
							<div className={styles.palkka}>
								<p>ALV:</p>
								<p>2.40€</p>
							</div>
							<hr />
							<div className={styles.palkka}>
								<p>Yhteensä:</p>
								<p>22.40€</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.skill_div}>
					<div>
						<h3>Käytetyt tekniikat</h3>
						<p>
							Front-end puolella perus substanttiivina toimii HTML, sitä kuvaavana adjektiivina toimii
							perus CSS tai sitten SCSS tarvittaessa. Tekoa kuuvavina verbeinä käytän javascriptiä, sen
							pääkirjastona Reactia ja viitekehyksenä NextJs
						</p>
						<p>Back-endin puolella Nodejs toimii serveri kielenä ja MongoDb parhaiten tietokantana</p>
					</div>
					<div>
						<Image src="/img/skills.png" height={400} width={360} alt="Skilli puu" />
					</div>
				</div>
				<div className={styles.page_prices}>
					<h3>Kuukausi hinnat</h3>
					<p>
						Itse käytän pääasiassa näitä, koska ne tukevat moderneja ratkaisuja luontevasti ja niissä on
						valmiina SSL, mutta tietenkin muistakin verkkosivujen sivoituspaikasta voidaan neuvotella.
					</p>
					<p>
						Github pages sopisi pienille organisaatioille ja yksityishenkilöille. Netlify ja Vercel olisivat
						sitten kaupallisiin tarkoituksiin ja niillä kummallakin on omat vahvuutensa. Riippuen tarpeesta.
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
				<div className={styles.image}>
					<Image src="/img/mobile.png" height={400} width={300} alt="tyttö kännykässä" />
				</div>
			</section>
		</main>
	);
};

export default Freelancer;
