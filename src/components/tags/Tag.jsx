/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../features/filter/filterSlice";

export default function Tag({tag}) {

  const {title} = tag
  const dispatch = useDispatch()
  console.log("the title is", title)
  // get the state 
  const {tags:selectedTags} = useSelector(state => state.filters)
  console.log("The tags are", selectedTags)
  const isSelected = selectedTags.includes(title)
  const handleSelect =()=> 
  {
    if(isSelected) 
    {
      dispatch(tagRemoved(title))
    }
    else 
    {
      dispatch(tagSelected(title))
    }
  }

  const style = isSelected ? "bg-blue-600 text-white px-4 py-1 rounded-full coursor-pointer" : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
  return (
    <div>
      <div onClick={handleSelect} className={style}>
       {title}
      </div>
    </div>
  );
}
