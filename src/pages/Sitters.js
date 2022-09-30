import React, { useState } from "react";
import Layout from "../Layout";
import { SitterData } from "../Data";
import { DesktopSitterCard, MobileSitterCard } from "../components/Card";
import { RatingFilterButton } from "../components/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {SitterModal} from "../components/Modal";

const Sitters = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleClose=()=> setOpenModal(false);
    const handleOpen=()=> setOpenModal(true);

  const [sitter, setSitter] = useState(SitterData);
  const sitterList = [...new Set(SitterData.map((each) => each.ratings))];
  const filterSitter = (selectedRating) => {
    const newRating = SitterData.filter((each) => {
      return each.ratings === selectedRating;
    });
    setSitter(newRating);
  };

  return (
    <Layout>
      <div>
        <Container>
          <h1 className="mt-4">Find Sitters Around You</h1>
          <SitterModal show={openModal} onHide={handleClose}/>
          {/* <RatingFilterButton
            filterSitter={filterSitter}
            setSetter={setSitter}
            sitterList={sitterList}
          /> */}
          <Row className="justify-content-center">
            {sitter.map((each, id) => (
              <DesktopSitterCard each={each} onClick={handleOpen}/>
            ))}
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Sitters;
