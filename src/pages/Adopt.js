import React, {useState} from "react";
import Layout from "../Layout";
import { AdoptData } from "../Data";
import { DesktopAdoptCard, MobileAdoptCard } from "../components/Card";
import { BreedFilterButton } from "../components/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { AdoptModal } from "../components/Modal";


const Adopt =()=>{
    const [openModal, setOpenModal] = useState(false);
    const handleClose=()=> setOpenModal(false);
    const handleOpen=()=> setOpenModal(true);
    return(


            <Layout>
                <div className="">
                    <Container className="">
    
                    <h1 className="mt-4">Adopt</h1>
                    <AdoptModal show={openModal} onHide={handleClose} />
                    {/* <BreedFilterButton filterBreed={filterBreed} setBreed={setBreed} breedList={breedList} /> */}
                    <Row className="justify-content-center">
    
                    {AdoptData.map((each, id)=>
                    (
    
                    <DesktopAdoptCard each={each} onClick={handleOpen}/>
                    ))}
                    </Row>
                    </Container>
                </div>
            </Layout>
    )
}

export default Adopt;