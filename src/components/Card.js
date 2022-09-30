import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { BreedButton } from "./Button.js";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import { SitterButton } from "./Button.js";
import { AdoptModal } from "../components/Modal";
import Button from "react-bootstrap/Button";

export const DesktopBreedCard = ({ each, onClick, setOwner }) => {
  return (
    <Card
      style={{
        backgroundColor: "#FFC300",
        height: "400px",
        width: "300px",
        border: "2px solid #FFC300",
        borderRadius: "20px",
        color: "#FFF",
        boxShadow: "0 8px 8px -4px lightblue",
        padding: "20px",
        margin: "30px",
        marginBottom: "50px",
      }}
    >
      <Card.Img className="card-img" variant="top" src={each.img} />
      <Card.Body className="d-flex flex-column">
        <h3>
          {each.name}, {each.age}
        </h3>
        <h6>{each.species}</h6>
        <p>Owned by:{each.owner}</p>
        <div className="d-grid" align="center">
          <Button onClick={onClick} className="align-self-end mt-auto">
            Contact Owner
          </Button>
        </div>
        {/* <BreedButton className="align-self-end mt-auto" text="View" /> */}
      </Card.Body>
    </Card>
  );
};

export const GeneralDesktopBreedCard = ({ each, onClick, setOwner }) => {
  const navigate = useNavigate();

  const navigateAdopt=()=>{
    navigate('/breed');
  }
  return (
    <Card
      style={{
        backgroundColor: "#FFC300",
        height: "400px",
        width: "300px",
        border: "2px solid #FFC300",
        borderRadius: "20px",
        color: "#FFF",
        boxShadow: "0 8px 8px -4px lightblue",
        padding: "20px",
        margin: "30px",
        marginBottom: "50px",
      }}
    >
      <Card.Img className="card-img" variant="top" src={each.img} />
      <Card.Body className="d-flex flex-column">
        <h3>
          {each.name}, {each.age}
        </h3>
        <h6>{each.species}</h6>
        <p>Owned by:{each.owner}</p>
        <div className="d-grid" align="center">
          <Button onClick={navigateAdopt} className="align-self-end mt-auto">
            Go to Breed
          </Button>
        </div>
        {/* <BreedButton className="align-self-end mt-auto" text="View" /> */}
      </Card.Body>
    </Card>
  );
};

export const MobileBreedCard = ({ each }) => { 
  const navigate = useNavigate();

  const navigateAdopt=()=>{
    navigate('/breed');
  }
  return (
    <Card
      style={{
        backgroundColor: "#FFC300",
        height: "370px",
        width: "250px",
        border: "2px solid #FFC300",
        borderRadius: "20px",
        color: "#FFF",
        boxShadow: "0 8px 8px -4px lightblue",
        padding: "20px",
        margin: "30px",
        marginBottom: "50px",
      }}
    >
      <Card.Img className="card-img" variant="top" src={each.img} />
      <Card.Body className="d-flex flex-column">
        <h3>
          {each.name}, {each.age}
        </h3>
        <h6>{each.species}</h6>
        <p>Owned by:{each.owner}</p>
        <div className="d-grid" align="center">
          <Button onClick={navigateAdopt} className="align-self-end mt-auto">
            Go to Breed
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export const DesktopSitterCard = ({ each, onClick }) => {
  return (
    <Card
      style={{
        backgroundColor: "#FFC300",
        height: "470px",
        width: "300px",
        border: "2px solid #FFC300",
        borderRadius: "20px",
        color: "#FFF",
        boxShadow: "0 8px 8px -4px lightblue",
        padding: "20px",
        margin: "30px",
        marginBottom: "50px",
      }}
    >
      <Card.Img className="card-img" variant="top" src={each.img} />
      <Card.Body className="d-flex flex-column">
        <h3>{each.name}</h3>
        <h5>{each.location} miles away</h5>
        <p>Rate: {each.rate} USD per hour</p>
        <ReactStars
          value={each.ratings}
          count={5}
          size={50}
          edit={false}
          isHalf={false}
          activeColor="#FF4400"
        />
         <div className="d-grid" align="center">
          <Button onClick={onClick} className="align-self-end mt-auto">
            Hire Now
          </Button>
        </div>
        {/* <SitterButton className="mt-auto" text="Hire Now" /> */}
      </Card.Body>
    </Card>
  );
};

export const GeneralDesktopSitterCard = ({ each, onClick }) => {
  const navigate = useNavigate();

  const navigateAdopt=()=>{
    navigate('/sit');
  }
  return (
    <Card
      style={{
        backgroundColor: "#FFC300",
        height: "470px",
        width: "300px",
        border: "2px solid #FFC300",
        borderRadius: "20px",
        color: "#FFF",
        boxShadow: "0 8px 8px -4px lightblue",
        padding: "20px",
        margin: "30px",
        marginBottom: "50px",
      }}
    >
      <Card.Img className="card-img" variant="top" src={each.img} />
      <Card.Body className="d-flex flex-column">
        <h3>{each.name}</h3>
        <h5>{each.location} miles away</h5>
        <p>Rate: {each.rate} USD per hour</p>
        <ReactStars
          value={each.ratings}
          count={5}
          size={50}
          edit={false}
          isHalf={false}
          activeColor="#FF4400"
        />
         <div className="d-grid" align="center">
          <Button onClick={navigateAdopt} className="align-self-end mt-auto">
            Go to Sitter
          </Button>
        </div>
        {/* <SitterButton className="mt-auto" text="Hire Now" /> */}
      </Card.Body>
    </Card>
  );
};

export const MobileSitterCard = ({ each }) => {  const navigate = useNavigate();

  const navigateAdopt=()=>{
    navigate('/sit');
  }
  return (
    <Card
      style={{
        backgroundColor: "#FFC300",
        height: "430px",
        width: "250px",
        border: "2px solid #FFC300",
        borderRadius: "20px",
        color: "#FFF",
        boxShadow: "0 8px 8px -4px lightblue",
        padding: "20px",
        margin: "30px",
        marginBottom: "50px",
      }}
    >
      <Card.Img className="card-img" variant="top" src={each.img} />
      <Card.Body className="d-flex flex-column">
        <h3>{each.name}</h3>
        <h5>{each.location} miles away</h5>
        <p>Rate: {each.rate} USD per hour</p>
        <ReactStars
          value={each.ratings}
          count={5}
          size={40}
          edit={false}
          isHalf={false}
          activeColor="#FF4400"
        />
        <div className="d-grid" align="center">
          <Button onClick={navigateAdopt} className="align-self-end mt-auto">
            Go to Sitter
          </Button>
        </div>
       
      </Card.Body>
    </Card>
  );
};

export const DesktopAdoptCard = ({ each, onClick }) => {
  return (
    <Card
      style={{
        backgroundColor: "#FFC300",
        height: "330px",
        width: "300px",
        border: "2px solid #FFC300",
        borderRadius: "20px",
        color: "#FFF",
        boxShadow: "0 8px 8px -4px lightblue",
        padding: "20px",
        margin: "30px",
        marginBottom: "50px",
      }}
    >
      <Card.Img className="card-img" variant="top" src={each.img} />
      <Card.Body className="d-flex flex-column">
        <h3>
          {each.name}, {each.age}
        </h3>
        <div className="d-grid" align="center">
          <Button onClick={onClick} className="align-self-end mt-auto">
            Adopt
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export const GeneralDesktopAdoptCard = ({ each, onClick }) => {
  const navigate = useNavigate();

  const navigateAdopt=()=>{
    navigate('/adopt');
  }
  return (
    <Card
      style={{
        backgroundColor: "#FFC300",
        height: "330px",
        width: "300px",
        border: "2px solid #FFC300",
        borderRadius: "20px",
        color: "#FFF",
        boxShadow: "0 8px 8px -4px lightblue",
        padding: "20px",
        margin: "30px",
        marginBottom: "50px",
      }}
    >
      <Card.Img className="card-img" variant="top" src={each.img} />
      <Card.Body className="d-flex flex-column">
        <h3>
          {each.name}, {each.age}
        </h3>
        <div className="d-grid" align="center">
          <Button onClick={navigateAdopt} className="align-self-end mt-auto">
            Go to Adopt
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export const MobileAdoptCard = ({ each, onClick }) => {
  const navigate = useNavigate();

  const navigateAdopt=()=>{
    navigate('/adopt');
  }
  return (
    <Card
      style={{
        backgroundColor: "#FFC300",
        height: "290px",
        width: "250px",
        border: "2px solid #FFC300",
        borderRadius: "20px",
        color: "#FFF",
        boxShadow: "0 8px 8px -4px lightblue",
        padding: "20px",
        margin: "30px",
        marginBottom: "50px",
      }}
    >
      <Card.Img className="card-img" variant="top" src={each.img} />
      <Card.Body className="d-flex flex-column">
        <h3>
          {each.name}, {each.age}
        </h3>
        <div className="d-grid" align="center">
          <Button onClick={navigateAdopt} className="align-self-end mt-auto">
            Go to Adopt
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
