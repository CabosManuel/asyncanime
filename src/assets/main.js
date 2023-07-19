const URL = 'https://myanimelist.p.rapidapi.com/anime/top/all';

const content = document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f9eca26c09msh32da97ec4f1ba3ap1941a1jsnc18b38bd4a09',
		'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
	}
};

(async () => {
	try {
		const response = await fetch(URL, options);
		const animes = await response.json();
		
		let template = `
			${animes.filter(anime => anime.type.includes('TV')).map(anime => `
			<div class="group relative flex gap-x-2">
				<div
					class="w-14 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
					<img src="${anime.picture_url}" alt="${anime.title}" class="w-full">
				</div>
				<div class="flex-col justify-between text-xs text-gray-700">
					<h3 class="font-bold">${anime.title}</h3>
					<p class="text-xs">${anime.aired_on} / ${anime.type}</p>
					<p class="text-2xl font-bold text-green-600">${anime.score}</p>
				</div>
			</div>
			`).slice(0, 12).join('')}
		`;
		
		content.innerHTML = template;

	} catch (error) {
		console.error(error);
	}
})();