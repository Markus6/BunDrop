import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div style={{ height: "100%", fontFamily: "PT Sans Narrow" }}>
      <div style={backgroundStyle}></div>
      <div style={foregroundStyle}></div>
    </div>
  );
}

const foregroundStyle = {
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  position: "absolute",
  top: "0",
  left: "0",
};

const backgroundStyle = {
  height: "100%",
  background:
    "linear-gradient(0deg, rgba(255,160,122,1) 0%, rgba(0,0,0,0) 100%), url(/BunDropImages/burger-6.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
  fontSize: 50,
  color: "red",
  textAlign: "center",
  filter: "blur(5px)",
};

export default Menu;
