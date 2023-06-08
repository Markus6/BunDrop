import React from "react";

function Footer() {
  return <div style={footerStyle}></div>;
}

const footerStyle = {
  zIndex: "1",
  display: "flex",
  alignItems: "center",
  fontSize: 20,
  fontFamily: "PT Sans Narrow",
  color: "#FFA07A",
  background: "#212121",
  height: "100px",
  width: "100%",
};

export default Footer;
