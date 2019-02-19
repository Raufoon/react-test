import axios from 'axios';


const SERVER_URL = 'https://my-json-server.typicode.com/Raufoon/react-test'

const fetchAllPosts = async () => {
  let postsDTO;
  try {
    postsDTO = await axios.get(`${SERVER_URL}\posts`)
    return JSON.parse(postsDTO);
  } catch (error) {
    console.error(error)
  }
};