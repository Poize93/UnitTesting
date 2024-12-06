import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOption from "./ScoopOption";
import { Row } from "react-bootstrap";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((err) => {});
  }, [optionType]);

  const ItemComponents = optionType === "scoops" ? ScoopOption : null;

  const optionItems = items.map((item) => (
    <ItemComponents
      key={item?.name}
      name={item?.name}
      imagePath={item?.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
