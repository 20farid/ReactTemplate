
const KEY =
    '?client_id=bf1a62c3aeb7787760a8dc77d6c6635441115d91708aafb267693a882bab1d99';
const URL = `https://api.unsplash.com/photos`;

const fetchImages = async page => {
    const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

const fetchImageStats = async id => {
    const response = await fetch(`${URL}/${id}/statistics${KEY}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

const fetchDetailImages = async id => {
    const response = await fetch(`${URL}/${id}/${KEY}`);
    const data =  await response.json();
    if (response.status >= 400){
      throw new Error(data.errors);
    }
    return data;
};

export { fetchImages, fetchImageStats, fetchDetailImages };
