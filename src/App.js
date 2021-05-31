import "./App.css";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./components/ProductCard/ProductCard";
import PreApprovedSteps from "./components/PreApprovedSteps/PreApprovedSteps";

function App() {
  return (
    <div className="container-fluid">
      <Row>
        <Col className="payqart-label" xs={3} md={3}>
          <div>
            <p>&#8592; Back To Store</p>
          </div>
          <div>
            <img
              src="./images/logo.png"
              alt="pay with PayQart logo"
              width="250px"
            />
          </div>
          <div>
            <ul>
              <li>Get pre-approved instantly</li>
              <li>Spread payment for upto six months</li>
              <li>Provide some basic information to get started.</li>
            </ul>
          </div>
        </Col>
        <Col className="cart-display p-4" xs={3} md={3}>
          <h6 className="mb-3">Order Summary</h6>
          <ProductCard />
        </Col>
        <Col className="container kyc-steps p-4" xs={7} md={6}>
          <PreApprovedSteps />
        </Col>
      </Row>
    </div>
  );
}

export default App;
