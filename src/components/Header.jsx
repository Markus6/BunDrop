import React from "react";

function Header() {
  return (
    <div style={headerStyle}>
      <img style={headerlogo} src="/BunDropImages/logo color.png" alt="image" />
    </div>
  );
}

const headerStyle = {
  zIndex: "1",
  display: "flex",
  alignItems: "center",
  fontSize: 20,
  fontFamily: "PT Sans Narrow",
  color: "#FFA07A",
  background: "#212121",
  height: "100px",
};

const headerlogo = {
  height: "75px",
  margin: "20px",
};

export default Header;
