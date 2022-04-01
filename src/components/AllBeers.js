import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Input, Image } from "antd";

const url = "https://ih-beers-api2.herokuapp.com/beers";
const url2 = "https://ih-beers-api2.herokuapp.com/beers/search?q=";

function AllBeers() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const { Meta } = Card;
  const handleSearch = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(url2 + filter.trim());
      setData(data);
    }
    getData();
  }, [filter]);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get(url);
      setData(data);
    }
    getData();
  }, []);

  return (
    <div className="beerList">
      <Input
        value={filter}
        placeholder="Search"
        type="text"
        onChange={handleSearch}
      />
      {data.map((beer) => {
        return (
          <Card key={beer._id} hoverable style={{ width: 300 }}>
            <Image src={beer.image_url} width={200} />
            <Meta title={beer.name} description={beer.tagline} />
            <p>
              <b>Contributed: {beer.contributed_by}</b>
            </p>
            <Link to={`${beer._id}`}>more details</Link>
          </Card>
        );
      })}
      <br />
    </div>
  );
}

export default AllBeers;
