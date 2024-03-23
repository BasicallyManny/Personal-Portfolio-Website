import Modal from "react-bootstrap/Modal";
import ContactForm from "./constants/ContactForm.jsx";

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
