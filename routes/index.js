//var User = require('../lib/tables').User;
/*
 * GET home page.
 */

exports.index = function(req, res)
{
	//check for cookie to see if user is logged in. If so, send them to the homepage instead of index (login) page.
	// if(/*cookie*/){
		res.render('index', { title: 'Express', routes: app.routes.get });
	// }else{
	//	res.render('home', {});
	// }
};

exports.signup = function(req, res)
{
	res.render('signup', {title: 'Sign Up'});
};


 exports.signin = function(req,res)
{//find user in database, compare 'stored' password with input password

	//var user = User.find(req.params.username)
	//if(user.password == req.params.password)
	//{
	//	res.redirect('home', {user: user})
	//}
	res.redirect('/');
}

exports.createNewUser = function(req, res)
{
	var name = req.param("username");
	var pass = req.param("password");
	
	if(name && pass)
	{
		console.log(name + " " + pass);
		// enter name into the database

		res.redirect("/"); //if signup is successful, send them to home
	}

	res.redirect("/signup");
};
