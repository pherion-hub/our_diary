const Card = (props) => {
  return (
    <div className="flex flex-col items-start p-4 border rounded-lg shadow-lg">
      <span>Datum</span>
      <h2>Post Title</h2>
      <img
        src="https://picsum.photos/id/237/200/300"
        alt=""
        className="h-[200px] w-full object-cover"
      />
    </div>
  );
};

export default Card;
