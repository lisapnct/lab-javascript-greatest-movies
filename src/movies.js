// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  var directors = movies.map((movies) => movies.director);
  // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
  var filteredDirectors = directors.filter((v,i) => directors.indexOf(v) === i);
  return filteredDirectors;
}

getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDrama = movies.filter(
    (movies) =>
      movies.director === "Steven Spielberg" && movies.genre.includes("Drama")
  );
  return spielbergDrama.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    var rateExists = movies.filter((movies) => movies.rate >= 0);
    const sumRates = rateExists.reduce(
      (acc, rateExists) => (acc += rateExists.rate),
      0
    );
    var averageRates = sumRates / movies.length;
    return Number(averageRates.toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  if (movies.length === 0) {
    return 0;
  } else {
    var dramaMovies = movies.filter(
      (movies) => movies.genre.includes("Drama") && movies.rate >= 0
    );
    if (dramaMovies.length === 0) {
      return 0;
    } else {
      var dramaMoviesAvg = dramaMovies.reduce(
        (acc, dramaMovies) => (acc += dramaMovies.rate),
        0
      );
      var avgDramaRates = dramaMoviesAvg / dramaMovies.length;
      return Number(avgDramaRates.toFixed(2));
    }
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
  const copyMovies = [...movies];

  var moviesSortedAbc = copyMovies.sort(function(a, b) {
      return a.title - b.title
  });
  console.log(moviesSortedAbc);

  return moviesSortedAbc.sort(function(a, b) {
      return a.year - b.year;
  });
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
  const copyMovies = [...movies];
  let newArr = [];
  copyMovies.forEach((movies) => newArr.push(movies.title));
  console.log(newArr);
  const moviesArr = newArr.sort();
  if (moviesArr.length > 20) {
    return moviesArr.slice(0, 20);
  } else {
    return moviesArr;
  }
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  const copyMovies = [...movies];
  var hours = copyMovies.map(function(movies) {
      movies.duration.split(' ', 1);
  })
  return hours;
// Work in progress
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
