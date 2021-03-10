const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	//Extract token from header
	const token = req.header('x-auth-token');
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
