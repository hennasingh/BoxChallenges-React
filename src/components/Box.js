import React from "react";

export default function Box(prop) {
    
    const styles = {
        backgroundColor: prop.on ? "aqua" : "transparent"
    }
  return (
    <div
      className="box"
      styles={styles}>
          
      </div>
  );
}
