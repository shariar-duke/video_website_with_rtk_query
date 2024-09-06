import axios from "../../utils/axios.js";
export const getRelatedVideos =async({tags, id})=> 
{

//   http://localhost:9000/videos?tags_like=javascript&tags_like=react&id_ne=2&_limit=1

// query string ta emn hbe normally

  const limit =5;
  let queryString = tags?.length > 0 ? tags.map((tag) => `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${limit}` : `id_ne=${id}&_limit=${limit}`
  const response = await axios.get(`/videos?${queryString}`)

  return response.data
}