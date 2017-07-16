// replace this entire code block with the config found in the firebase dashboard
// for your created database
var config = {
  // Initialize Firebase
    apiKey: "AIzaSyDvue4tj8Qw0LBFrAr4J2me6WNhUDeGWm4",
    authDomain: "lotta-lyrics-saver.firebaseapp.com",
    databaseURL: "https://lotta-lyrics-saver.firebaseio.com",
    projectId: "lotta-lyrics-saver",
    storageBucket: "lotta-lyrics-saver.appspot.com",
    messagingSenderId: "633823887068"
  };
  firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

$(function() {
    $('#second-step').hide();
});

$(function(){
	$("#button-gstarted").on('click', function(event){
		$("#copy").hide();
		$('#copy2').hide();
		$('#button-gstarted').hide();
		$('#second-step').show();
	});

$(function(){
	// var newList = database.ref("/song-list")

	$("#button-submit").on('click', function(event){
	event.preventDefault();
	//obtain the values that the user has typed in by getting the element by an ID and calling val()
 	var song = $('#song-name').val();
 	var artist = $('#artist-name').val();
 	console.log(artist, song)
 		 	// our URL format:
 	var baseURL = "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&"
 	var searchURL = baseURL + "q_track=" + song + "&q_artist=" + artist + "&apikey=b20b56089f743d857d0f6d35c3ec4f12"

 	$.get(searchURL, function(response){
 		// var lyrics = response.lyrics_body
 		console.log(response);

 	})


	});

	});

	});




// TWO SAMPLE CALLS - ONE TO GET TRACK ID AND ONE TO GET LYRICS
// http://api.musixmatch.com/ws/1.1/track.search?apikey=b20b56089f743d857d0f6d35c3ec4f12&q_artist=queen&q_track=we%20are%20the%20champions&format=json&page_size=1&f_has_lyrics=1
// http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=b20b56089f743d857d0f6d35c3ec4f12&track_id=15953433