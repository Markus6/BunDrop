import React from "react";

function Footer() {
  return <div style={footerStyle}></div>;
}

const footerStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: 20,
  fontFamily: "PT Sans Narrow",
  color: "#FFA07A",
  background: "#212121",
  height: "100px",
  position: "absolute",
  bottom: "0px",
  width: "100%",
};

export default Footer;
