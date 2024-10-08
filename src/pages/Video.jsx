import { useParams } from "react-router-dom";
import Player from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideoList";
import Loading from "../components/ui/Loading";
import RelatedVideoLoader from "../components/ui/RelatedVideoLoader";
import { useGetVideoQuery } from "../features/api/apiSlice";

export default function Video() {
  const { videoId } = useParams();
  const {
    data: video,
    isError,
    isLoading,
  } = useGetVideoQuery(videoId ? videoId : "");



  // video er modhe onk property ase ogula distructure kore ber kore ante hbe

  const { link, title, id } = video || {};

  let content = null;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = (
      <div className="col-span-12 text-red-500">
        <p>Error Loading Videos</p>{" "}
      </div>
    );

  if (!isLoading && !isError && !video?.id) {
    content = <div className="col-span-12">No video found </div>;
  }

  if (!isLoading && !isError && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <Player link={link} title={title} />

          <VideoDescription video={video} />
        </div>
        <RelatedVideoList id={id} title={title} />

        {video?.id ? (
          <p>Related Videos</p>
        ) : isLoading ? (
          <>
            <RelatedVideoLoader />
            <RelatedVideoLoader />
          </>
        ) : (
          <p className="text-red-500 font-bold">No Video Found</p>
        )}
      </div>
    );
  }

  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </>
  );
}
