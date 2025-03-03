import { MdPostAdd } from "react-icons/md";

const Button = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="flex items-center md:bg-slate-200 md:px-4 md:py-2 md:rounded "
      >
        <MdPostAdd className="text-5xl" />
        <span className="hidden md:inline">AddPost</span>
      </button>
    </>
  );
};

export default Button;
