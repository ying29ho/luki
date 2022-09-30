import React from "react";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { BreedData, SitterData, AdoptData } from "../Data";
import MediaQuery from "react-responsive";

export const BreedButton = ({ text }) => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <Button variant="primary" type="button" onClick={handleClick}>
      {text}
    </Button>
  );
};

export const SitterButton = ({ text }) => {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <Button variant="primary" onClick={handleClick}>
      {text}
    </Button>
  );
};

export const BreedFilterButton = ({ filterBreed, setBreed, breedList }) => {
  return (
    <div className="d-flex justify-content-center">
      <MediaQuery maxWidth={900}>
        <Stack gap={2}>

        
      {breedList.map((each, id) => {
          return (
            <Button
              variant="outline-primary"
              className=""
              onClick={() => filterBreed(each)}
              key={id}
            >
              {each}
            </Button>
          );
        })}
        <Button
          className=""
          variant="outline-primary"
          onClick={() => setBreed(BreedData)}
        >
          All
        </Button>
        </Stack>
      </MediaQuery>
      <MediaQuery minWidth={901}>
        <Stack direction="horizontal" gap={3}>

     
        {breedList.map((each, id) => {
          return (
            <Button
              variant="outline-primary"
              className="px-3 mx-3"
              onClick={() => filterBreed(each)}
              key={id}
            >
              {each}
            </Button>
          );
        })}
        <Button
          className="p-1 px-3 mx-3"
          variant="outline-primary"
          onClick={() => setBreed(BreedData)}
        >
          All
        </Button>
        </Stack>
      </MediaQuery>
    </div>
  );
};

export const RatingFilterButton = ({ filterSitter, setSitter, sitterList }) => {
  return (
    <div className="d-flex justify-content-center">
      {sitterList.map((each, id) => {
        return (
          <Button
            variant="outline-primary"
            className="p-1 px-2 mx-3"
            onClick={() => filterSitter(each)}
            key={id}
          >
            {each}
          </Button>
        );
      })}
      <Button
        className="p-1 px-3 mx-3"
        variant="outline-primary"
        onClick={() => setSitter(SitterData)}
      >
        All
      </Button>
    </div>
  );
};
