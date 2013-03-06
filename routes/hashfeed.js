
/*
 * GET hash feed.
 */

exports.feed = function(req, res)
{	
	var hashtag = req.params.hashtag;
	if(hashtag == undefined){
		hashtag = "All"
	}
	hashtag = hashtag.charAt(0).toUpperCase() + hashtag.slice(1);
	res.render('hashfeed', { title: hashtag });
};