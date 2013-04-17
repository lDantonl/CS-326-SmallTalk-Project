/**
 * Main Javascript file included on every page. Used for global functions like search.
 */

$(document).ready(function()
{
	var results_box = $("#search-results");
	var search_box = $("#global-search-box");
	results_box.css("left", search_box.offset().left);
	results_box.css("width", search_box.width()+30);

	var temp = ["ryan", "mccann", "rmmccann", "r", "ry", "rya", "ryan mccann"];
	$("#global-search-box").instantSearch(temp, "/search", function(results){
		results_box.show();
		results_box.html("");

		// var hashtags = [];
		// $.each(results.posts, function(index, value){
		// 	var tmp = value.content.match(/#\w+/);
		// 	console.log(tmp);
		// 	if(tmp) hashtags.push(tmp[0]);
		// });
		// console.log(hashtags);
		// // var matches = results.users.concat(results.posts);
		// var matches = results.users.concat(hashtags);
		// $.each(matches, function(index, value){
		// 	results_box.append("<div>"+value.username+"</div>");
		// });
		// if(matches.length===0) results_box.append("No results found");

		$.each(results, function(index, value)
		{
			results_box.append("<div><a href='"+value.url+"'>"+value.text+"</a></div>");
		});
		if(results.length===0) results_box.append("No results found");

	});

	$("#global-search-box").blur(function(){
		setTimeout(function(){results_box.hide();}, 300); //hide after 300ms
	});


	//Typeahead
	// var colors = ["red", "blue", "green", "yellow", "brown", "black"];
	// $("#global-search-box").typeahead({source: colors});
});
