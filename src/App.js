import "./App.css";
import { Breed } from "../src/components/Breed.js";
import { Sitters } from "../src/components/Sitters.js";
import { Adopt } from "../src/components/Adopt.js";
import Container from "react-bootstrap/esm/Container";
import Abbey from "../src/sitters/Abbey.jpeg";
import Bash from "../src/sitters/Bash.jpeg";
import Christine from "../src/sitters/Christine.jpeg";
import Elizabeth from "../src/sitters/Elizabeth.jpeg";
import Fred from "../src/sitters/Fred.jpeg";
import Fredrick from "../src/sitters/Fredrick.jpeg";
import John from "../src/sitters/John.jpeg";
import Lily from "../src/sitters/Lily.jpeg";
import Mark from "../src/sitters/Mark.jpeg";
import Molly from "../src/sitters/Molly.jpeg";
import Nicky from "../src/sitters/Nicky.jpeg";
import Rose from "../src/sitters/Rose.jpeg";
import Taylor from "../src/sitters/Taylor.jpeg";
import Tom from "../src/sitters/Tom.jpeg";
import Beagle from "../src/breeds/Beagle.jpeg";
import Chihuahua from "../src/breeds/Chihuahua.jpeg";
import ChowChow from "../src/breeds/ChowChow.jpeg";
import Dachshund from "../src/breeds/Dachshund.jpeg";
import Dalmatian from "../src/breeds/Dalmatian.jpeg";
import Dalmatian1 from "../src/breeds/Dalmatian1.jpeg";
import Dobermann from "../src/breeds/Dobermann.jpeg";
import EnglishmixTibetanMastiff from "../src/breeds/EnglishmixTibetanMastiff.jpeg";
import FrenchBullDog from "../src/breeds/FrenchBullDog.jpeg";
import GermanShepard from "../src/breeds/GermanShepard.jpeg";
import Pomeranian from "../src/breeds/Pomeranian.jpeg";
import GoldenRetriever from "../src/breeds/GoldenRetriever.jpeg";

const pets = [
  { id: 1, name: "Abba", age: "15", species: "pure Chihuahua", owner: "Bobby", img: Chihuahua,},
  {
    id: 2,
    name: "Cathy",
    age: "9",
    species: "pure French Bull Dog",
    owner: "Dobby",
    img: FrenchBullDog,
  },
  {
    id: 3,
    name: "Ethanol",
    age: "10",
    species: "mixed English Mastiff & Tibetan Mastiff ",
    owner: "Frankie",
    img: EnglishmixTibetanMastiff,
  },
  {
    id: 4,
    name: "Georgy",
    age: "9",
    species: "pure Pomeranian",
    owner: "Hellen",
    img: Pomeranian,
  },
  { id: 5, name: "Ingrid", age: "8", species: "pure Beagle", owner: "Joel", img: Beagle },
  { id: 6, name: "Kapn", age: "6", species: "pure Dachshund", owner: "Lemon", img: Dachshund },
  {
    id: 7,
    name: "Milo",
    age: "4",
    species: "pure German Shepard",
    owner: "Nico",
    img: GermanShepard
  },
  {
    id: 8,
    name: "Opal",
    age: "2",
    species: "pure Golden Retriever",
    owner: "Precious",
    img: GoldenRetriever
  },
  {
    id: 9,
    name: "Queen Lizzy",
    age: "10",
    species: "pure Chow Chow",
    owner: "Randal",
    img: ChowChow
  },
  {
    id: 10,
    name: "Sandi",
    age: "12",
    species: "pure Dobermann",
    owner: "Toms",
    img: Dobermann
  },
  { id: 11, name: "Lalu", age: "4", species: "pure Dalmation", owner: "Umma", img: Dalmatian },
  {
    id: 12,
    name: "Dolly",
    age: "4",
    species: "pure Dalmation",
    owner: "Umma",
    img: Dalmatian1
  },
];

const sitters=[
  {
    id: 1, name: "Abbey", location: "North", ratings: 5, img: Abbey, 
  },
  {
    id: 2, name: "Christine", location: "North", ratings: 5,  img: Christine, 
  },
  {
    id: 3, name: "Elizabeth", location: "North", ratings: 5,img: Elizabeth,  
  },
  {
    id: 4, name: "Fred", location: "North", ratings: 5 , img: Fred, 
  },
  {
    id: 5, name: "Fedrick", location: "North", ratings: 5 , img: Fredrick, 
  },
  {
    id: 6, name: "John", location: "North", ratings: 5 , img: John, 
  },
  {
    id: 7, name: "Lily", location: "North", ratings: 5 , img: Lily, 
  },
  {
    id: 8, name: "Mark", location: "North", ratings: 5 , img: Mark, 
  },
  {
    id: 9, name: "Molly", location: "North", ratings: 5 , img: Molly, 
  },
  {
    id: 10, name: "Nicky", location: "North", ratings: 5 , img: Nicky, 
  },
  {
    id: 11, name: "Rose", location: "North", ratings: 5 , img: Rose, 
  },
  {
    id: 12, name: "Taylor", location: "North", ratings: 5 , img: Taylor, 
  },
  {
    id: 13, name: "Tom", location: "North", ratings: 5 , img: Tom, 
  },
  {
    id: 14, name: "Bash", location: "North", ratings: 5 , img: Bash, 
  },
  
]

function App() {
  return (
    <div className="App">
      <Container align="left">
        
      <div className="p-5">
        <h1>Adopt these wonderful lil beings here!</h1>
        <Adopt petlist={pets} />
      </div>
      <div className="p-5">
        <h1>
          Looking for a mate for your pet? Here's our list of eligible bachelors
          and bachelorettes.
        </h1>
        <Breed petlist={pets} />
      </div>
      <div className="p-5">
        <h1>Looking for pet sitters? Here's the top pick of the month.</h1>
        <Sitters sitterlist={sitters} />
      </div>
      </Container>
    </div>
  );
}

export default App;
