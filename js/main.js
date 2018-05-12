;(function () {
	'use strict';
	var playList = [{
		author: "Malfa",
		song: "So long",
		duration: "3:33"
	},
	{
		author: "Selena Gomez",
		song: "Wolves",
		duration: "3:18"
	},
	{
		author: "David Guetta",
		song: "2U",
		duration: "3:15"
	},
	{
		author: "Katy Perry",
		song: "Swish Swish",
		duration: "4:02"
	},
	{
		author: "Imagine Dragons",
		song: "Thunder",
		duration: "3:07"
	},
	{
		author: "Ariana Grande",
		song: "Everyday",
		duration: "3:11"
	},
	{
		author: "Martin Garrix & Dua Lipa",
		song: "Scared To Be Lonel",
		duration: "3:40"
	},
	{
		author: "Clean Bandit",
		song: "Rockabye",
		duration: "4:11"
	},
	{
		author: "Lana Del Rey",
		song: "Young And Beautiful",
		duration: "4:27"
	}
	];

	var playListEL = document.getElementById('playlist'),
	    playListTmpl = document.getElementById('playlist-li').innerHTML,
	    playListHTML = '';

	    console.log(playListTmpl);

	    playList.forEach(function (item) {

	    	playListHTML += playListTmpl
	    	.replace(/{{author}}/ig, item.author)
	    	.replace(/{{duration}}/ig, item.duration)
	    	.replace(/{{song}}/ig, item.song)

	    });

	    console.log(playListHTML);

	    playListEL.innerHTML =playListHTML;
	// body...
})();
