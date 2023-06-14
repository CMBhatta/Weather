const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kathmandu';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f89d070b9dmsha796ba426edb7b0p1ea92bjsnbf608b8ab58e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}