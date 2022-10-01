import Script from 'next/script';

import '../styles/globals.css';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { AppProvider } from '../context';
import { FormspreeProvider } from '@formspree/react';

function MyApp({ Component, pageProps }) {
	return (
		<FormspreeProvider project="2041720831289064907">
			<AppProvider>
				<Layout>
					<Component {...pageProps} />
					<Script src="https://www.google.com/recaptcha/api.js" async defer />
				</Layout>
			</AppProvider>
		</FormspreeProvider>
	);
}

export default MyApp;
