const KEY = '?api_key=7d711d94f2f7f57e099b7b4ac6cbd56e';
const URL = 'https://api.themoviedb.org';

const fetchMovieConfig = async () => {
  const response = await fetch(`${URL}/3/configuration${KEY}`);
  const data = await response.json();
  if(response.status >= 400){ throw new Error(data.errors); }
  return data;
};

const fetchMovieList = async page => {
  const response = await fetch(`${URL}/3/discover/movie${KEY}&page=${page}&year=2018`);
  const data = await response.json();
  if(response.status >= 400){ throw new Error(data.errors); }
  return data;
};

const fetchMovieNowPlaying = async () => {
  const response = await fetch(`${URL}/3/movie/now_playing${KEY}&region=US`);
  const data = await response.json();
  if(response.status >= 400){ throw new Error(data.errors); }
  return data;
};

const fetchMovieDetail = async id => {
  const response = await fetch(`${URL}/3/movie/${id}/${KEY}`);
  const data = await response.json();
  if(response.status >= 400){ throw new Error(data.errors); }
  return data;
};

export {
  fetchMovieConfig,
  fetchMovieList,
  fetchMovieNowPlaying,
  fetchMovieDetail,
};
