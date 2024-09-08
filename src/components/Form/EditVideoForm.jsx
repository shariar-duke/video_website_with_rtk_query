import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEditVideoMutation } from '../../features/api/apiSlice';

export default function EditVideoForm({ video }) {
  const [form, setForm] = useState({
    title: video?.title ?? '',
    author: video?.author ?? '',
    description: video?.description ?? '',
    link: video?.link ?? '',
    thumbnail: video?.thumbnail ?? '',
    date: video?.date ?? '',
    duration: video?.duration ?? '',
    views: video?.views ?? 0,
  });

  const [editVideo, { isLoading, isSuccess, isError }] = useEditVideoMutation();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // To navigate to the home page

  // Update the form when the input fields change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the mutation to edit the video
      await editVideo({ id: video.id, data: form }).unwrap();
    } catch (err) {
      setErrorMessage('Failed to update the video. Please try again.');
    }
  };

  // If the mutation is successful, redirect to the home page
  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess, navigate]);

  return (
    <form onSubmit={handleSubmit}>
      {/* Display error message if the update fails */}
      {isError && <p className="text-red-500">Failed to update the video.</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {/* Form fields */}
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

      {/* Date, Duration, Views Fields */}
      <div className="grid grid-cols-3 gap-4 mb-4">
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
            placeholder="Enter duration"
          />
        </div>

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
            placeholder="Enter number of views"
          />
        </div>
      </div>

      {/* Save Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
      >
        {isLoading ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}
