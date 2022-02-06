import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h6 className="title">Welcome to To-Do List Application</h6>
              <p className="subtitle">Save all your tasks</p>
            </div>
            <div className="buttonContainer">
              <Button size="lg" 
              variant="outline-primary"
              className="btn btn-outline-primary">
                Login
              </Button>

              <Button
                variant="outline-primary"
                size="lg"
                className="btn btn-outline-primary"
              >
                Signup
              </Button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
