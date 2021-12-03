import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import { useState } from "react";
import Films from "./Films";
import TVShows from "./TVShows";
import VideoGames from "./VideoGames";
import placeholder from "../../imgs/placeholder.png";

const TableData = ({object}) => {

    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);

    return (
        <>
            <td>
                <div className="img-container">

                    <img src={(object.imageUrl) ? object.imageUrl.split("/revision/")[0] : placeholder} onClick={toggle} alt=""/>

                    <div className="img-overlay" onClick={toggle}>
                        <div className="img-text">{object.name}</div>
                    </div>

                </div>
            </td>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>{object.name}</ModalHeader>
                <ModalBody>
                    <Films films={object.films}/>
                    <TVShows tvshows={object.tvShows}/>
                    <VideoGames games={object.videoGames}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default TableData;