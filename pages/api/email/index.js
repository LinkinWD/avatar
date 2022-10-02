import dbconnect from '../../../utils/connect';
import Email from '../../../models/email';

export default async function handler(req, res) {
	const { method } = req;

	await dbconnect();

	if (method === 'GET') {
		try {
			const emails = await Email.find();
			res.status(200).json(emails);
		} catch (error) {
			res.status(500).json(error);
		}
	}
	if (method === 'POST') {
		try {
			const email = await Email.create(req.body);
			res.status(201).json(email);
		} catch (error) {
			res.status(500).json(error);
		}
	}
}
