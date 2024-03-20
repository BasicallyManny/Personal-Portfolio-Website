import Modal from "react-bootstrap/Modal";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
//import { AiOutlineSend } from "react-icons/ai";
import ContactForm from "./constants/ContactForm";

export default function Contact(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className=""
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Send me an Email!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactForm></ContactForm>
      </Modal.Body>
    </Modal>
  );
}
