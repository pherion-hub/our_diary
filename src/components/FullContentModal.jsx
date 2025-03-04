import { AiFillCloseSquare } from "react-icons/ai";

const FullContentModal = ({ postData, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70">
      <div className=" bg-slate-200 p-6 rounded-lg shadow-lg w-96 mx-4 relative">
        <span>{postData.date}</span>
        <h2 className="text-xl font-bold mb-4 flex items-center justify-start">
          {postData.title}
        </h2>
        <AiFillCloseSquare
          className="text-5xl text-black absolute right-[20px] top-[20px]"
          onClick={onClose}
        />
        <img src={postData.imageUrl} alt="" />
        <p className="break-words mt-4">{postData.content}</p>
      </div>
    </div>
  );
};

export default FullContentModal;
