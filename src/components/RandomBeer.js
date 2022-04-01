import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://ih-beers-api2.herokuapp.com/beers/random";

function RandomBeer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(url);
      setData(data);
    }
    getData();
  }, []);

  return (
    <div>
      <img src={data.image_url} alt={data.name} />
      <h1>{data.name}</h1>
      <h4>{data.tagline}</h4>
      <p>{data.first_brewed}</p>
      <p>{data.attenuation_level}</p>
      <p>{data.description}</p>
      <p>{data.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
