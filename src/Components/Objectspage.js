import React from "react";
import object from "../Data/Objects.json";
import './Component.css';
import { Container, Row } from "react-bootstrap";
function ObjectPage() {
  return (
    <Container>
      <Row className="mt-5">
        <h2 className="title">SHOULD WHO LEARN PROGRAMING IN FPT APTECH ?</h2>
        <div className="cards">
          {object.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.title} className="card-img" />
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </Row>
    </Container>
  );
}

export default ObjectPage;

