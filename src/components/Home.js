import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import { Typography } from "antd";

function Home() {
  const { Title } = Typography;
  return (
    <div>
      <img src={beers} alt="All Beers" className="image" />
      <Link to={"/beers"}>
        <Title>All Beers</Title>
      </Link>
      <img src={randomBeer} alt="All Beers" className="image" />
      <Link to={"/beers/random"}>
        <Title>Random Beer</Title>
      </Link>
      <img src={newBeer} alt="All Beers" className="image" />
      <Link to={"/beers/new"}>
        <Title>New Beer</Title>
      </Link>
    </div>
  );
}

export default Home;
