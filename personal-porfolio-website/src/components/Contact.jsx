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
    >
      <ContactForm></ContactForm>
    </Modal>
  );
}
