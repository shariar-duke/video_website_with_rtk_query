import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";
import Loading from "../ui/Loading";
import VideoGridItem from "./VideoGridItem";
export default function VideoGrid() {
  const dispatch = useDispatch();



  // state takeo amader lagbe

  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );

  const {tags, search} = useSelector((state)=> state.filters)
  useEffect(() => {
    dispatch(fetchVideos({tags, search}));
  }, [dispatch, tags, search]);

  // deciding what to render error message ta dekhabo naki videos gula dekhabo. videos thakle videos gula dekhabo. r jode videos na ase tahle error message gula dekhabo

  let content;
  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }

  if(!isError && !isLoading && videos?.length == 0) 
    {
      content = <div className="col-span-12">No Videos Found</div>;
    }
  if(!isError && !isLoading && videos?.length > 0) 
  {
    content = videos.map((video) => <VideoGridItem key={video.id} video={video}/> ) 
  }

  return (
    <section className="pt-2">
      <section className="pt-2">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
         {content}
        </div>
      </section>
    </section>
  );
}
