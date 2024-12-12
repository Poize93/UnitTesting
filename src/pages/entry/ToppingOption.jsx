import { Col, Form } from "react-bootstrap";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function ToppingOptions({ name, imagePath }) {
  const { updateItemCount } = useOrderDetails();
  const handleChange = (e) => {
    updateItemCount(name, e.target.checked ? 1 : 0, "toppings");
  };

  return (
    <Col xs={12} sm={6} lg={3}>
      <img
        src={`http://localhost:3000/${imagePath}`}
        alt={`${name} Topping`}
        style={{ width: "75%" }}
      />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check type="checkbox" onChange={handleChange} label={name} />
      </Form.Group>
    </Col>
  );
}
