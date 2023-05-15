import "./styles.css";
import boxes from "./boxes";
import React from "react";

export default function App() {
  const [squares, setSquares] = React.useState(boxes);

  //Styles are written like below in Javascript
  const styles = {
    backgroundColor: "aqua"
  };

  const squareElements = squares.map((square) => (
    <div style={styles} className="box" key={square.id}></div>
  ));
  return <main>{squareElements}</main>;
}
