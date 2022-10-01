export const ValidateEmail = (data) => {
	const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const email = data.email;
	if (email.match(mailFormat)) {
		return true;
	} else {
		alert('You have entered an invalid email address!');

		return false;
	}
};
