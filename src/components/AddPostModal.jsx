import { AiFillCloseSquare } from "react-icons/ai";
import { IoIosSave } from "react-icons/io";
import { useState } from "react";

const AddPostModal = ({ onClose, addNewPost, posts }) => {
  const [isDateValid, setIsDateValid] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    const title = e.target.title.value.trim();
    const imageUrl = e.target.imageUrl.value.trim();
    const content = e.target.content.value.trim();
    const date = e.target.date.value.trim();

    if (!title || !imageUrl || !content || !date) {
      alert("Please fill in all fields!");
      return;
    }

    if (posts.some((post) => post.date === date)) {
      setIsDateValid(false);
      return;
    }

    addNewPost({ title, imageUrl, content, date });

    e.target.reset();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70">
      <div className="bg-white p-6 rounded-lg shadow-lg mx-4">
        <h2 className="text-xl font-bold mb-4 flex items-center justify-center">
          {" "}
          New Diary Entry
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <label htmlFor="date">Date: </label>
          <input type="date" name="date" />
          {!isDateValid && (
            <p className="text-red-500">
              You have already written a diary entry for this date. Please
              choose another date.
            </p>
          )}

          <input
            name="title"
            type="text"
            placeholder="Title"
            className="w-full p-2 border rounded"
          />
          <input
            name="imageUrl"
            type="text"
            placeholder="Image URL"
            className="w-full p-2 border rounded"
          />
          <textarea
            name="content"
            rows="4"
            placeholder="Write your thoughts..."
            className="w-full p-2 border rounded"
            maxLength="500"
          ></textarea>

          <div className="flex justify-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className=" text-black rounded flex items-center md:bg-slate-200 md:px-4 md:py-2"
            >
              <AiFillCloseSquare className="text-5xl text-black" />
              <span className="hidden md:inline">Cancel</span>
            </button>
            <button
              type="submit"
              className=" text-black flex items-center md:bg-slate-200 md:px-4 md:py-2 rounded"
            >
              <IoIosSave className="text-5xl text-black" />
              <span className="hidden md:inline">Save</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPostModal;
