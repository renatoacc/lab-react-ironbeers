import axios from "axios";
import { useState } from "react";
import { Input, Button } from "antd";

const url = "https://ih-beers-api2.herokuapp.com/beers/new";

function NewBeer() {
  const { TextArea } = Input;
  const [beer, setBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setBeer({ ...beer, [event.target.name]: value });
  };
  console.log(beer);
  const createNewBeer = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(url, beer);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="newBeer">
      <form>
        <Input
          name="name"
          value={beer.name}
          type="text"
          placeholder="Name"
          onChange={handleChange}
        />
        <br />
        <Input
          name="tagline"
          value={beer.tagline}
          type="text"
          placeholder="Tagline"
          onChange={handleChange}
        />
        <br />
        <TextArea
          rows={4}
          name="description"
          value={beer.description}
          type="text"
          placeholder="Description"
          onChange={handleChange}
        />
        <br />
        <Input
          name="first_brewed"
          value={beer.first_brewed}
          type="text"
          placeholder="First Brewed"
          onChange={handleChange}
        />
        <br />
        <Input
          name="brewers_tips"
          value={beer.brewers_tips}
          type="text"
          placeholder="Brewers Tips"
          onChange={handleChange}
        />
        <br />
        <Input
          name="attenuation_level"
          value={beer.attenuation_level}
          min="0"
          max="100"
          type="number"
          placeholder="Attenuation Level"
          onChange={handleChange}
        />
        <br />
        <Input
          name="contributed_by"
          value={beer.contributed_by}
          type="text"
          placeholder="Contributed by"
          onChange={handleChange}
        />
        <Button onClick={createNewBeer}>Create</Button>
      </form>
    </div>
  );
}

export default NewBeer;
