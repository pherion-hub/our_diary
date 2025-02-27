const Card = ({ title, imageUrl, content }) => {
  return (
    <div className="flex flex-col items-start  border rounded-lg shadow-lg bg-amber-100 w-[300px] md:w-[400px] lg:w-[500px]">
      <div className="card-title p-4">
        <span>{props.datum}</span>
        <h2 className="text-lg md:text-xl font-bold">{title}</h2>
      </div>

      <img
        src={imageUrl}
        alt=""
        className="h-[200px] w-full object-cover rounded-b-lg"
      />
      <p>{content}</p>
    </div>
  );
};

export default Card;
