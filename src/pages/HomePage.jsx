import Card from "../components/Card";

const HomePage = (props) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};

export default HomePage;
