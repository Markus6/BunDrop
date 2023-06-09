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
          <MenuItem key={m.id} name={m.name} image={m.image} price={m.price} />
        ))}
      </div>
      <Link style={btnOrder} to="/order">
        <div>
          <p style={{ margin: 0 }}>To Order</p>
        </div>
      </Link>
    </div>
  );
}

const btnOrder = {
  position: "fixed",
  top: "10px",
  right: "10px",
  zIndex: "1",
  background: "#FFA07A",
  display: "flex",
  fontSize: "40px",
  color: "#212121",
  textDecoration: "none",
  borderRadius: "20px",
  padding: "10px",
  border: "solid #212121",
};

const foregroundStyle = {
  display: "flex",
  flexWrap: "wrap",
  overflow: "hidden",
  marginBottom: "100px",
  justifyContent: "center",
  paddingRight: "0.5%",
  paddingLeft: "0.5%",
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
