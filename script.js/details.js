const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const url = 'https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=' + params.get("id");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b079abcd3bmsh18abae33074ec56p1e2928jsn9bf27958615b',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

document.querySelector('.movies').innerHTML = `<div class="loader"> <h1>Loading...</h1></div>`;

fetch(url , options)
	.then(response => {
        if (response.status !== 200) throw new Error("Error in the API response")
        return response.json();
    })
    .then(movie => {
        const title = movie.title.title;
        const image = movie.title.image.url;
        const year = movie.title.year;
        const plot = movie.plotSummary.text;

        document.title = `${title}`;

        const movieHTML = `<h2 class="movieTitle">"${title}" Release year: ${year}</h2>
                           <div class="result">
                            <img src="${image}">
                            <h3>Plot summary</h3>
                            <p>${plot}</p>
                       </div>`;

        document.querySelector('.movies').innerHTML = movieHTML;
    })
	.catch(err => console.error(err));