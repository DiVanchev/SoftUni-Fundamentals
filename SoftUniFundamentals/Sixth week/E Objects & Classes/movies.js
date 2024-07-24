function moviesS(arr) {
    const movies = [];

    for (const commands of arr) {
        if (commands.includes('addMovie')) {
            const tokens = commands.split('addMovie ');
            const movieName = tokens[1].trim();
            movies.push({ name: movieName });

        } else if (commands.includes('directedBy')) {
            const [movieName, movieDirector] = commands.split(' directedBy ');
            const existingMovie = movies.find(movieObj => movieObj.name === movieName.trim());

            if (existingMovie) {
                existingMovie.director = movieDirector.trim();
            }

        } else if (commands.includes('onDate')) {
            const [movieName, date] = commands.split(' onDate ');
            const existingMovie = movies.find(movieObj => movieObj.name === movieName.trim());

            if (existingMovie) {
                existingMovie.date = date.trim();
            }
        }
    }

    for (const movieObj of movies) {
        if (movieObj.name && movieObj.director && movieObj.date) {
            console.log(JSON.stringify(movieObj));
        }
    }
}

moviesS([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);
