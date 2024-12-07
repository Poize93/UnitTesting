import Col from "react-bootstrap/Col";

export default function ToppingOptions({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} lg={3}>
      <img
        src={`http://localhost:3000/${imagePath}`}
        alt={`${name} Topping`}
        style={{ width: "75%" }}
      />
    </Col>
  );
}
