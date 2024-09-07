/* eslint-disable react/prop-types */

import { useGetRelatedVideosQuery } from "../../features/api/apiSlice";
import RelatedVideoLoader from "../ui/RelatedVideoLoader";
import RelatedVideoListItem from "./RelatedVideoListItem";
export default function RelatedVideoList({ id, title }) {
  const {
    data: relatedVideos,
    isLoading,
    isError,
  } = useGetRelatedVideosQuery({ id, title });
  // decide which one will render
  let content;
  if (isLoading) {
    content = (
      <>
        <RelatedVideoLoader />
        <RelatedVideoListItem />
        <RelatedVideoLoader />
        <RelatedVideoListItem />
        <RelatedVideoLoader />
        <RelatedVideoListItem />
      </>
    );
  }

  if (!isLoading && isError) {
    content = (
      <div className="col-span-12 text-[20px] text-red-500">
        <p>No Related videos</p>
      </div>
    );
  }

  if (!isError && !isLoading && relatedVideos?.length == 0) {
    content = <div className="col-span-12">No Videos Found</div>;
  }
  if (!isError && !isLoading && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => (
      <RelatedVideoListItem key={video.id} video={video} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
}
