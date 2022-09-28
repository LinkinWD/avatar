import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';

import styles from '../styles/Form.module.css';

export default function Form() {
	const [ state, handleSubmit ] = useForm('contact me');
	const [ capshaDone, setCaphsaDone ] = useState(false);

	if (state.succeeded) {
		return <div>Kiitos kiinostuksestasi</div>;
	}
	function onChange(value) {
		setCaphsaDone(true);
	}
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<input type="text" name="_gotcha" style={{ display: 'none' }} />
			<label htmlFor="email">Sähköposti</label>
			<input id="email" type="email" name="email" />
			<ValidationError field="email" prefix="Email" errors={state.errors} />
			<label htmlFor="message">Viesti</label>
			<textarea id="message" name="message" />
			<ValidationError prefix="Message" field="message" errors={state.errors} />
			<ReCAPTCHA sitekey="6LcV1jgiAAAAAA7HHmDnn-z_FSSWuGAy8NHC7p9X" onChange={onChange} />,
			{capshaDone ? (
				<button type="submit" disabled={state.submitting} className={styles.btn}>
					Lähetä
				</button>
			) : (
				<button type="button" className={styles.btn}>
					Ole ihminen
				</button>
			)}
		</form>
	);
}
