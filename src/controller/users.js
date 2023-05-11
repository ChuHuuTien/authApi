

const User = require('../models/user');



exports.getUser = async username => {
	try {
		const data = await User.findOne({username: username});
		return data;
	} catch {
		return null;
	}
};

exports.createUser = async user => {
	try {
		user = new User(user);
    	user.save()
		return true;
	} catch {
		return false;
	}
};

exports.updateRefreshToken = async (username, refreshToken) => {
	try {
		await User.updateOne({username: username},{ refreshToken: refreshToken } )
		return true;
	} catch {
		return false;
	}
};


