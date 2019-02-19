import axios from 'axios';


const SERVER_URL = 'https://my-json-server.typicode.com/Raufoon/react-test'

const axiosGet = url => axios.get(url, {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
}).then(response => {
  return response.data;
});

export const fetchAllPosts = async () => {
  let postsDTO;
  try {
    postsDTO = await axiosGet(`${SERVER_URL}/posts`);
    return postsDTO;
  } catch (error) {
    console.error(error)
  }
};