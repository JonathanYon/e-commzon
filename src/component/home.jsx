import { Component } from "react";
import { Jumbotron, Row, Col, Button, Container } from "react-bootstrap";

class Home extends Component {
  state = {
    category: [],
  };

  componentDidMount = async () => {
    const response = await fetch("https://jonathan-e-com.herokuapp.com/categs");
    if (response.ok) {
      const res = await response.json();
      console.log(res);
      this.setState({
        category: res,
      });
    }
  };
  render() {
    return (
      <>
        <Jumbotron>
          <Row className="d-flex">
            <Col>
              <p>NEW PRODUCTS</p>
              <h1>coming from api</h1>
              <Button>SEE PRODUCT</Button>
            </Col>
            <Col>IMAGE COMING FROM API</Col>
          </Row>
        </Jumbotron>
        <Container>
          <Row className="d-flex">
            {this.state.category.map((pro) => (
              <Col key={pro.id}>{pro.name}</Col>
            ))}
          </Row>
          <Row>sjkhfjkahjkshjakh</Row>
          <Row>sjkhfjkahjkshjakh</Row>
          <Row>sjkhfjkahjkshjakh</Row>
        </Container>
      </>
    );
  }
}
export default Home;
