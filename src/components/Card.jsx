const Card = ({ title, imageUrl, onClick, date }) => {
  return (
    <div
      className="flex flex-col mx-auto items-start   rounded-lg  bg-slate-200 w-[300px] cursor-pointer"
      onClick={onClick}
    >
      <div className="card-title p-4">
        <div>{date}</div>
        <h2 className="text-lg md:text-xl font-bold">{title}</h2>
      </div>

      <img
        src={imageUrl}
        alt=""
        className="h-[200px] w-full rounded-b-lg object-cover"
      />
    </div>
  );
};

export default Card;
