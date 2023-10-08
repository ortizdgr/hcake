import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="text-center">
      <h2 className="pt-5"> Bienvenido a </h2>
      <h1> <span className="fw-bold">HAPPY CAKE</span></h1>
      <h3> El lugar de los pasteles felices 😊</h3>
      <p style={{ fontSize:'200px'}}>🎂</p>
    </Container>
  );
};
export default HomePage;
