const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  },
  fetchHorrorMovie: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  },
  fetchMysteryMovies: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  },
  fetchScifiMovies: {
    title: "Sci-fi",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
  },
  fetchWesternMovies: {
    title: "Wentern",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  },
  fetchAnimationMovies: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  },
  fetchTVMovies: {
    title: "Tv Movie",
    url: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10752`,
  },
};
