import axios from "../../utils/axios.js"
export const getVideos =async(tags, search)=> 
{
  let queryStirng =""
  if(tags.length >0) 
  {
    queryStirng += tags.map((tag)=> `tags_like=${tag}`).join("&")
  }

  if(search !="") 
  {
    queryStirng += `&q=${search}`
  }
  const response = await axios.get(`/videos/?${queryStirng}`)

  return response.data
}