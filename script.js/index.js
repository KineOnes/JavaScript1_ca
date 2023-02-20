const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b079abcd3bmsh18abae33074ec56p1e2928jsn9bf27958615b',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=breakfast', options)
	.then(response => response.json())
    .then(data => {
        const list = data.d;

        list.map((item) => {
            const name = item.l
            const actors = item.s
            const movie = `<div class="result"><li><img src="${image}"> <h2>${name} (${actors})</h2> </li></div>`
            document.querySelector('.movies').innerHTML += movie;
        })
    })
	.then(response => console.log(response))
	.catch(err => console.error(err));