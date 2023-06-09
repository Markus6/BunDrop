import React from "react";

function MenuItem({ name, image, price }) {
  return (
    <div style={menuItem}>
      <img style={menuImage} src={image} alt="image" />
      <div style={{ display: "flex" }}>
        <p style={textStyle}>{name}</p>
        <p style={textStyle}>Price: {price} kr</p>
      </div>
    </div>
  );
}

const textStyle = {
  fontSize: 40,
  color: "#FFA07A",
  margin: 0,
  margin: "auto",
};

const menuItem = {
  margin: "20px",
  padding: "20px",
  background: "#212121",
  maxWidth: "100vw",
  borderRadius: "30px",
};

const menuImage = {
  height: "250px",
  width: "300px",
  maxWidth: "100%",
  objectFit: "cover",
  borderRadius: "30px",
};

export default MenuItem;
