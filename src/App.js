import "./App.css";
import { DesktopBreed, MobileBreed } from "../src/components/Breed.js";
import { DesktopSitters, MobileSitters } from "../src/components/Sitters.js";
import { DesktopAdopt, MobileAdopt } from "../src/components/Adopt.js";
import Container from "react-bootstrap/esm/Container";
import MediaQuery from "react-responsive";
import {AdoptData, BreedData, SitterData} from "./Data.js"



function App() {
  return (
    <div className="App">
      <Container align="left">
        <MediaQuery maxWidth={900}>
          <div className="p-4">
            <h1>Adopt these wonderful lil beings here!</h1>
            <MobileAdopt petlist={AdoptData} />
          </div>
          <div className="p-4">
          <h1>
            Looking for a mate for your pet? Here's our list of eligible
            bachelors and bachelorettes.
          </h1>
          <MobileBreed petlist={BreedData} />
        </div>
        <div className="p-4">
          <h1>Looking for pet sitters? Here's the top pick of the month.</h1>
          <MobileSitters sitterlist={SitterData} />
        </div>
        </MediaQuery>
        <MediaQuery minWidth={901}>
          <div className="p-5">
            <h1>Adopt these wonderful lil beings here!</h1>
            <DesktopAdopt petlist={AdoptData} />
          </div>
          <div className="p-5">
          <h1>
            Looking for a mate for your pet? Here's our list of eligible
            bachelors and bachelorettes.
          </h1>
          <DesktopBreed petlist={BreedData} />
        </div>
        <div className="p-5">
          <h1>Looking for pet sitters? Here's the top pick of the month.</h1>
          <DesktopSitters sitterlist={SitterData} />
        </div>
        </MediaQuery>
       
        
      </Container>
    </div>
  );
}

export default App;
