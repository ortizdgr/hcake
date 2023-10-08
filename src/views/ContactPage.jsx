import { Container } from "react-bootstrap";
import Contacto from "../components/ContactForm";

const ContactPage = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">Cuéntanos</h1>
      <h3>¿En qué podemos ayudarte?</h3>
      <Contacto />
    </Container>
  );
};
export default ContactPage;
