import React from 'react'
import { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigation } from 'react-router-dom';



const Pro1 = () => {
    const [show, setShow] = useState(false);
    useEffect (()=>{
      handleShow()
    },[])
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <div>
      <button>add</button>
        <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  )
}

export default Pro1