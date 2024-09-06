/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideo } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/Loading";
import RelatedVideoListItem from "./RelatedVideoListItem";
export default function RelatedVideoList({currentVideoId ,tags }) {

  const {relatedVideos, isLoading, isError, error} = useSelector((state) => state.relatedVideos)
  console.log("The related videos are", relatedVideos)
  const dispatch = useDispatch()
  useEffect(()=> {
   dispatch(fetchRelatedVideo({id:currentVideoId , tags}))
  },[dispatch, tags, currentVideoId])

  // decide which one will render 
  let content;
  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if(!isError && !isLoading && relatedVideos?.length == 0) 
    {
      content = <div className="col-span-12">No Videos Found</div>;
    }
  if(!isError && !isLoading && relatedVideos?.length > 0) 
  {
    content = relatedVideos.map((video) => <RelatedVideoListItem key={video.id} video={video}/> ) 
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
     {content}
    </div>
  );
}
