const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b079abcd3bmsh18abae33074ec56p1e2928jsn9bf27958615b',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

document.querySelector('.movies').innerHTML = `<div class="loader"> <h1>Loading...</h1></div>`;

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=breakfast', options)
	.then((response) => {
        if (response.status !== 200) throw new Error("Error in the API response")
        return response.json();
    })
    .then((data) => {
        const movies = data.d;

        if (typeof movies !== 'object') {
            throw new Error("list is undefined")
        }

        document.querySelector('.movies').innerHTML = "";

        movies.map((movie) => {
            const movieHTML = `<div class="result">
                                <li><a href="details.html?id=${movie.id}">
                                    <img src="${movie.i.imageUrl}"> <h2>${movie.l} <br> ${movie.y}</h2>
                                </a></li>
                            </div>`;
        
            document.querySelector('.movies').innerHTML += movieHTML;
        })
    })
	.catch(err => console.error(err));

    