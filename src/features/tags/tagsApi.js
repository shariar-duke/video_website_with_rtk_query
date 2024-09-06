import axios from "../../utils/axios.js"
export const getTags =async()=> 
{
  const response = await axios.get('/tags')

  return response.data
}