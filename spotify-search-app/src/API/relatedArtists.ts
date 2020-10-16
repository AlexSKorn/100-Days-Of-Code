var SpotifyWebApi = require('../');
require('dotenv').config();

//he is calling a method called get credential before he is doing this
//this get credential call is getting the authorization code so I can create the route
//this allows me to make the actual request.
//he is then building the API calls using the api call builder
//which then turn into methods
function relatedArtistsFunction() {
	let spotifyApi = new SpotifyWebApi({
		clientId: process.env.CLIENT_ID,
		clientSecret: process.env.CLIENT_SECRET,
		redirectUri: 'https://www.google.com/',
	});

	var artistId = '0qeei9KQnptjwb8MgkqEoy';

	spotifyApi
		.authorizationCodeGrant(authorizationCode)
		.then(function (data) {
			console.log('Retrieved access token', data.body['access_token']);

			// Set the access token
			spotifyApi.setAccessToken(data.body['access_token']);

			// Use the access token to retrieve information about the user connected to it
			return spotifyApi.getArtistRelatedArtists(artistId);
		})
		.then(
			function (data) {
				if (data.body.artists.length) {
					// Print the number of similar artists
					console.log(
						'I got ' + data.body.artists.length + ' similar artists!'
					);

					console.log('The most similar one is ' + data.body.artists[0].name);
				} else {
					console.log("I didn't find any similar artists.. Sorry.");
				}
			},
			function (err) {
				console.log('Something went wrong:', err.message);
			}
		);
}

export default relatedArtistsFunction;
