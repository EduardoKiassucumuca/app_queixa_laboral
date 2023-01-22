import React from "react";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";


import "./details_queixa.css";

const Thanks = ({ data, updateFielHndler }) => {
  return (
    <Form>
      <Row className="mb-3">
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Descreva o que aconteceu"
        >
          <Form.Control
            as="textarea"
            placeholder="Queixa"
            name="descricao"
            value={data.descricao || ""}
            onChange={(e) => updateFielHndler("descricao", e.target.value)}
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <p></p>
        <Col md={5}>
            <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Anexar Contrato de Trabalho</Form.Label>
            <Form.Control 
            type="file" 
            />
        </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default Thanks;
