/* eslint-disable react/prop-types */
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function EditDelete({id}) {
  return (
    <div className="flex space-x-4">
      {/* Edit Button */}
      <Link
        to={`/edit/${id}`}
        className="flex items-center bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-300"
      >
        <FaEdit className="mr-2" /> Edit
      </Link>

      {/* Delete Button */}
      <button className="flex items-center bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-300">
        <FaTrash className="mr-2" /> Delete
      </button>
    </div>
  );
}
