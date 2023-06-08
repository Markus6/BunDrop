import React from "react";

function MenuItem({ name, image, price }) {
  return (
    <div style={menuItem}>
      <img style={menuImage} src={image} alt="image" />
    </div>
  );
}

const menuItem = {
  margin: "10px",
  padding: "20px",
  background: "#212121",
  maxWidth: "100vw",
};

const menuImage = {
  height: "300px",
  maxWidth: "100%",
};

export default MenuItem;
