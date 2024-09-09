/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteVideoMutation } from "../../features/api/apiSlice";

export default function EditDelete({ id }) {
  const [deleteVideo, { isLoading, isError, isSuccess }] = useDeleteVideoMutation();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleDeleteVideo = () => {
    if (id) {
      deleteVideo(id).catch((error) => {
        setErrorMessage("Failed to delete the video.");
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/"); // Redirect to the home page on success
    }
    if (isError) {
      setErrorMessage("Failed to delete the video.");
    }
  }, [isSuccess, isError, navigate]);

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        {/* Edit Button */}
        <Link
          to={`/edit/${id}`}
          className="flex items-center bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-300"
        >
          <FaEdit className="mr-2" /> Edit
        </Link>

        {/* Delete Button */}
        <button
          onClick={handleDeleteVideo}
          className="flex items-center bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-300"
          disabled={isLoading} // Disable button when loading
        >
          <FaTrash className="mr-2" /> {isLoading ? "Deleting..." : "Delete"}
        </button>
      </div>

      {/* Error Message */}
      {isError && (
        <p className="text-red-500 font-semibold">
          {errorMessage || "An error occurred while deleting the video."}
        </p>
      )}
    </div>
  );
}
