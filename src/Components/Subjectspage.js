import React from "react";
import { Container, Row, Col,} from "react-bootstrap";
import subjects from "../Data/Subjects.json";
import './Component.css';
function SubjectsPage(){
    return(
        <Container className="text-center my-5">
            <Row className="justify-content-center">
                <h2 className="title">WHAT IS THE COURSE PROGRAM ?</h2>
                {subjects.map((item) => (
                    <Col key={item.id} xs={6} md={2} className="mb-4">
                        <div className="subject-logo">
                            <div className="logo-circle">
                                <img src={item.image} alt={item.name} />
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
            <p className="sub_text">
                With a program design that includes 04 semesters with many important
                technologies such as ReactJS, PHP, Python, .NET Core, Spring Boot,
                learners are introduced to the world of programming quickly and
                effectively. After graduation, students are confident in front of
                employers with 4 project semesters with quality, practical products, and
                will definitely score points.
            </p>
        </Container>
    );
};

export default SubjectsPage;
