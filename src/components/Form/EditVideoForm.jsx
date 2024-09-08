import { useState } from 'react';

export default function EditVideoForm({ video }) {
  console.log("The video description is", video);

  // State management for form fields
  const [form, setForm] = useState({
    title: video?.title ?? '',
    author: video?.author ?? '',
    description: video?.description ?? '',
    link: video?.link ?? '',
    thumbnail: video?.thumbnail ?? '',
    date: video?.date ?? '',
    duration: video?.duration ?? "", // Initialize as 0 or a valid number
    views: video?.views ?? "" // Initialize as 0
  });

  // Handle change for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Handle form submission (e.g., to update the video)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the update, e.g., by calling a mutation
  };

  return (
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
            placeholder="Duration in minutes"
          />
        </div>

        {/* Views Field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="views">
            Views
          </label>
          <input
            type="text"
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
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
      >
        Save Changes
      </button>
    </form>
  );
}
