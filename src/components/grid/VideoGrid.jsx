import { useEffect } from "react";
import { useGetVideosQuery } from "../../features/api/apiSlice";
import Loading from "../ui/Loading";
import VideoGridItem from "./VideoGridItem";
export default function VideoGrid() {
  const { data: videos, isLoading, isError , refetch } = useGetVideosQuery();

  useEffect(()=> 
  {
    refetch()
  })
  // deciding what to render error message ta dekhabo naki videos gula dekhabo. videos thakle videos gula dekhabo. r jode videos na ase tahle error message gula dekhabo

  let content = null;
  if (isLoading) {
    content = (
      <>
        <Loading />
        <Loading />
        <Loading />
      </>
    );
  }

  if (!isLoading && isError) {
    content = (
      <div className="col-span-12 text-red-500">
        <p>Error Loading Videos</p>{" "}
      </div>
    );
  }

  if (!isError && !isLoading && videos?.length == 0) {
    content = <div className="col-span-12">No Videos Found</div>;
  }
  if (!isError && !isLoading && videos?.length > 0) {
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));
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
