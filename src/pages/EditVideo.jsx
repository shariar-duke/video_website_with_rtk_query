import { useParams } from "react-router-dom";
import EditVideoForm from "../components/Form/EditVideoForm";
import { useGetVideoQuery } from "../features/api/apiSlice";
export default function EditVideo() {
  const { videoId } = useParams(); // Get the videoId from the URL params
  const { data: video, isLoading, isError } = useGetVideoQuery(videoId); // Fetch video data based on videoId

  let content = null;
  if (isLoading) {
    content = <div className="text-[20px] font-bold">Loading ...</div>;
  }

  if (!isLoading && isError) {
    content = (
      <div className="text-[20px] font-bold text-red-400">
        Errror Loading data{" "}
      </div>
    );
  }

  if (!isLoading && !isError && video?.id) {
    content = <EditVideoForm video={video} />;
  }
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md mt-[60px]">
      {/* Form Title */}
      <h2 className="text-2xl font-bold mb-4">Edit Video</h2>
      <p className="mb-6 text-gray-700">
        Please update the fields to edit the video details.
      </p>

      {/* Form Fields */}
      {content}
    </div>
  );
}
