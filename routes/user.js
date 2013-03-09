var User = require("../lib/User").User;

exports.profile = function(req, res)
{	
	res.render('profile', {User:User, title:User.username});
};

exports.followers = function(req, res)
{
	res.render('followers', {User:User,title:User.username});
};

exports.following = function(req, res)
{
	res.render('following', {User:User, title:User.username});
};
