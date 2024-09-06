import React, { useState } from 'react';

export default function EditVideoForm() {
  // State management for form fields
  const [form, setForm] = useState({
    title: '',
    author: '',
    description: '',
    youtubeLink: '',
    thumbnailLink: '',
    date: '',
    duration: '',
    views: ''
  });

  // Handle change for input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md mt-[60px]">
      {/* Form Title */}
      <h2 className="text-2xl font-bold mb-4">Edit Video</h2>
      <p className="mb-6 text-gray-700">Please update the fields to edit the video details.</p>

      {/* Form Fields */}
      <form>
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
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="youtubeLink">
            YouTube Video Link
          </label>
          <input
            type="text"
            id="youtubeLink"
            name="youtubeLink"
            value={form.youtubeLink}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter YouTube video link"
          />
        </div>

        {/* Thumbnail Link Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="thumbnailLink">
            Thumbnail Link
          </label>
          <input
            type="text"
            id="thumbnailLink"
            name="thumbnailLink"
            value={form.thumbnailLink}
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
              type="number"
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
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
