//var User = require('../lib/tables').User;
var User = require('../lib/User/');

/*
 * GET home page.
 */

exports.index = function(req, res)
{
	//check for cookie to see if user is logged in. If so, send them to the homepage instead of index (login) page.
	if(req.session.username == undefined){
		res.render('index', { title: 'SmallTalk', routes: app.routes.get });
	 }else{
		res.render('home', {title: req.session.username});
	 }
};

exports.signup = function(req, res)
{
	res.render('signup', {title: 'Sign Up'});
};


 exports.signin = function(req,res)
{//find user in database, compare 'stored' password with input password
		user = User.getUser(req.param("username"));

		if(user != undefined){
			if(user.password == req.param("password")){
				req.session.username = user.username;
				res.redirect('home', {})
			}
		}

	res.redirect('/');
}

 exports.logout = function(req,res)
{//find user in database, compare 'stored' password with input password
	req.session.username == undefined;
	res.redirect('/');
}

exports.createNewUser = function(req, res)
{
	//forEach(fucntion(objsinarray){objsinarray.getstuff})

	var username = req.param("username");
	var password = req.param("password");
	var email = req.param("email");
	var firstname = req.param("firstname");
	var lastname = req.param("lastname");

	var user = User.NewUser;
	user.username = username;
	user.password = password;
	user.email = email;
	user.firstname = firstname;//no validations 
	user.lastname = lastname;// for real names, just add to user object

	if(user.username != "" && user.password != "" && user.email != "")
	{	
		
		User.UserTable.push(user);
		tabled_user = User.getUser(user.username)
		if(tabled_user != undefined){//username is already taken
			res.redirect("/singup");
		}
		req.session.username = username;
		res.redirect("/"); //if signup is successful, send them to home(cookie required)
	}

	//return error (enter a valid username, pass, and email)
	res.redirect("/signup");
};
