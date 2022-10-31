const key = "dbf79896d1aad3e85f091d1a8b15dc90";
const baseUrl = "https://api.themoviedb.org/3";

const requests = {
  requestsPopular: `${baseUrl}/movie/popular?api_key=${key}&language=ru`,
  // requestsPopular: `${baseUrl}/popular?api_key=${key}&language=ru`,
  requestsTopRated: `${baseUrl}/movie/top_rated?api_key=${key}&language=ru`,
  requestsTrending: `${baseUrl}/movie/popular?api_key=${key}&language=ru`,
  // requestsHorror: `${baseUrl}/search?api_key=${key}&language=ru&query=horror`,
  requestsUpoming: `${baseUrl}/movie/upcoming?api_key=${key}&language=ru&page=1`,
};

export default requests;
