import React, {useState} from "react";
import Layout from "../Layout";
import { BreedData } from "../Data";
import { DesktopBreedCard } from "../components/Card";
import { BreedFilterButton } from "../components/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BreedModal } from "../components/Modal";

const Breed =()=>{
    const [openModal, setOpenModal] = useState(false);
    const handleClose=()=> setOpenModal(false);
    const handleOpen=()=> setOpenModal(true);
const [owner, setOwner] = useState("");
const [breed, setBreed] = useState(BreedData);
const breedList =[...new Set(BreedData.map((each)=> each.species))];
const filterBreed = (selectedSpecies)=>{
    const newBreed = BreedData.filter((each)=>{
        return each.species === selectedSpecies;
    });
    setBreed(newBreed);
}
    return(
        <Layout>
            <div>
                <Container>

                <h1 className="mt-4">Breed</h1>
                <BreedModal show={openModal} onHide={handleClose} each={owner}/>


                <BreedFilterButton  filterBreed={filterBreed} setBreed={setBreed} breedList={breedList} />
                <Row className="justify-content-center">

                {breed.map((each, id)=>
                (

                <DesktopBreedCard each={each}  onClick={handleOpen}/>
                ))}
                </Row>
                </Container>
            </div>
        </Layout>
    )
}

export default Breed;