import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ height: "100%", fontFamily: "PT Sans Narrow" }}>
      <div style={backgroundStyle}></div>
      <div style={foregroundStyle}>
        <img style={logo} src="/BunDropImages/logo black.png" alt="image" />{" "}
        <Link style={btnMenu} to="/menu">
          <div>
            <p>MENU</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

const btnMenu = {
  display: "flex",
  fontSize: "40px",
  color: "#FFA07A",
  textDecoration: "none",
  background: "#212121",
  borderRadius: "20px",
  height: "100px",
  width: "300px",
  maxWidth: "60vw",
  maxHeight: "10vh",
  justifyContent: "center",
  alignItems: "center",
  margin: "50px",
  marginBottom: "150px",
};

const logo = {
  margin: "auto",
  maxWidth: "60vw",
  maxHeight: "40vh",
  margin: "50px",
};

const foregroundStyle = {
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "100px",
};

const backgroundStyle = {
  zIndex: "-1",
  position: "fixed",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%",
  background:
    "linear-gradient(0deg, rgba(255,160,122,1) 0%, rgba(0,0,0,0) 100%), url(/BunDropImages/burger-6.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
  filter: "blur(5px)",
};

export default Home;
