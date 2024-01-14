import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/',
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '428a349b52msh9fb16dfdd35aee3p1f5791jsnc7abb5a3a31c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const FetchFromApi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
