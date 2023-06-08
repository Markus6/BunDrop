import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/menuItems")
      .then((res) => res.json())
      .then((data) => setMenuItems(data));
  }, []);

  return (
    <div style={{ height: "100%", fontFamily: "PT Sans Narrow" }}>
      <div style={backgroundStyle}></div>
      <div style={foregroundStyle}>
        {menuItems.map((m) => (
          <MenuItem key={m.id} name={m.name} image={m.image} />
        ))}
      </div>
    </div>
  );
}

const foregroundStyle = {
  display: "flex",
  flexWrap: "wrap",
  overflow: "hidden",
  marginBottom: "100px",
  justifyContent: "center",
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

export default Menu;
