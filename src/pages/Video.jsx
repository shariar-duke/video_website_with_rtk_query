import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Player from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideoList";
import Loading from "../components/ui/Loading";
import { fetchVideo } from "../features/video/videoSlice";

export default function Video() {
  const dispatch = useDispatch();
  const { video, isError, isLoading, error } = useSelector(
    (state) => state.video
  );

  const { videoId } = useParams();
  console.log(videoId);

  console.log("Single vidoe is", video);

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  // video er modhe onk property ase ogula distructure kore ber kore ante hbe

  const { link, title , tags , id} = video || {};

  // decide what to render
  let content = null;
  // jode loading state a thake
  if (isLoading) content = <Loading />;
  // jode error thake
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  // jode response ase but blank ekta object aslo . blank object a to id thakbe na

  if (!isLoading && !isError && !video?.id) {
    content = <div className="col-span-12">No video found </div>;
  }
  // r jode response ta thik thak vbe ase . response aslo tar modhe sob data ase video er id tao ase
  if (!isLoading && !isError && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <Player link={link} title={title} />

          <VideoDescription video={video} />
        </div>
        <RelatedVideoList currentVideoId ={id} tags= {tags} />
      </div>
    );
  }

  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {/* the code of this seciton is on top  */}
          {content}
        </div>
      </section>
    </>
  );
}
