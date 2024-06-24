const APIKEY = "6345a897c6bbf09929d6cd2a203cf635";

const requests = {
   fetchTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=2`,
   fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
   fetchRecommedation:`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=2`,
   fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`,
  fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`,

}

export default requests;