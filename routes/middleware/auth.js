const jwt = require('jsonwebtoken');

const getCookie = (cookie, cname) => {
	const name = `${cname}=`;
	const decodedCookie = decodeURIComponent(cookie);
	const ca = decodedCookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
};

module.exports = (req, res, next) => {
	//Extract token from header
	const token = getCookie(req.headers.cookie, 'x-auth-token');
    console.log(token);
	if (!token) res.status(401).json({ msg: 'No token, authorization failed' });

	//Verify the token
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = decoded;
		next();
	} catch (error) {
		res.status(400), json({ msg: 'Token is not valid' });
	}
};
