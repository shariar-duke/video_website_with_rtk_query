import { useEffect, useState } from "react";
import { useAddVideoMutation } from "../../features/api/apiSlice";

export default function AddVideoForm() {
  // State management for form fields
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    link: "",
    thumbnail: "",
    date: "",
    duration: "",
    views: 0,
  });

  const [addVideo, { data: video, isLoading, isError, isSuccess }] = useAddVideoMutation();

  // State for success or error messages
  const [message, setMessage] = useState("");

  // Handle change for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Reset the form
  const resetForm = () => {
    setForm({
      title: "",
      author: "",
      description: "",
      link: "",
      thumbnail: "",
      date: "",
      duration: "",
      views: 0,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form reload
    addVideo(form); // Add video
  };

  // Use effect to handle success or error messages
  useEffect(() => {
    if (isSuccess) {
      setMessage("Video added successfully!");
      resetForm(); // Reset the form AFTER the success message is shown
    }
    if (isError) {
      setMessage("Error adding video. Please try again.");
    }

    // Clear the message after 7 seconds
    const timer = setTimeout(() => {
      setMessage("");
    }, 4000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount or state change
  }, [isSuccess, isError]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md mt-[60px]">
      {/* Success/Error Message */}
      {message && (
        <div
          className={`p-4 mb-4 rounded ${
            isSuccess ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {message}
        </div>
      )}

      {/* Form Title */}
      <h2 className="text-2xl font-bold mb-4">Add New Video</h2>
      <p className="mb-6 text-gray-700">Please fill up the form to add a new video.</p>

      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
        {/* Title Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter video title"
          />
        </div>

        {/* Author Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="author">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={form.author}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter author name"
          />
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter video description"
            rows="3"
          ></textarea>
        </div>

        {/* YouTube Video Link Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="link">
            YouTube Video Link
          </label>
          <input
            type="text"
            id="link"
            name="link"
            value={form.link}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter YouTube video link"
          />
        </div>

        {/* Thumbnail Link Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="thumbnail">
            Thumbnail Link
          </label>
          <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            value={form.thumbnail}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter thumbnail link"
          />
        </div>

        {/* Date, Duration, Views Fields (on the same line) */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* Date Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Duration Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="duration">
              Duration (mins)
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Duration"
            />
          </div>

          {/* Views Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="views">
              Views
            </label>
            <input
              type="number"
              id="views"
              name="views"
              value={form.views}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Number of views"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center mt-[20px]">
          <button
            type="submit"
            className="w-[300px] bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
