import { AiFillCloseSquare } from "react-icons/ai";
import { IoIosSave } from "react-icons/io";

const Modal = ({ onClose, addNewPost }) => {
  function handleSubmit(e) {
    e.preventDefault();

    const title = e.target.title.value.trim();
    const imageUrl = e.target.imageUrl.value.trim();
    const content = e.target.content.value.trim();

    if (!title || !imageUrl || !content) {
      alert("Please fill in all fields!");
      return;
    }

    addNewPost({ title, imageUrl, content });

    e.target.reset();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 mx-4">
        <h2 className="text-xl font-bold mb-4 flex items-center justify-center">
          {" "}
          New Diary Entry
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
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
          ></textarea>

          <div className="flex justify-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className=" text-white rounded"
            >
              <AiFillCloseSquare className="text-5xl text-black" />
              <span className="hidden md:inline">Cancel</span>
            </button>
            <button type="submit" className="px-4 py-2 text-black">
              <IoIosSave className="text-5xl text-black" />
              <span className="hidden md:inline">Save</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
