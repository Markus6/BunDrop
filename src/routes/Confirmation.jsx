import React from "react";
import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <div style={{ height: "100%", fontFamily: "PT Sans Narrow" }}>
      <div style={backgroundStyle}></div>
      <div style={foregroundStyle}>
        <div style={box}>
          <h1 style={{ margin: "40px", fontSize: "40px" }}>Confirmation</h1>
          <p style={textStyle}>
            Order was succesful and will arrive in around{" "}
            {Math.floor(Math.random() * 40)} min
          </p>
          <Link style={btnOrder} to="/">
            <div>
              <p>HOME</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

const btnOrder = {
  display: "flex",
  fontSize: "40px",
  color: "#212121",
  textDecoration: "none",
  background: "#FFA07A",
  borderRadius: "40px",
  height: "800px",
  width: "200px",
  maxWidth: "60vw",
  maxHeight: "10vh",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  padding: "20px",
  marginBottom: "50px",
  fontWeight: "bold",
};

const textStyle = {
  fontSize: "30px",
  margin: "40px",
};

const box = {
  background: "#212121",
  color: "#FFA07A",
  borderRadius: "30px",
  width: "80%",
  margin: "40px",
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
export default Confirmation;
