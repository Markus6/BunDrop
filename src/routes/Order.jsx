import React from "react";
import { Link } from "react-router-dom";

function Order() {
  function removeItem(id) {
    localStorage.removeItem(id);
    document.getElementById("item" + id).remove();
  }

  function orderList() {
    let orderString = [];
    for (let i = 1; i < 16; i++) {
      try {
        console.log(JSON.parse(localStorage.getItem(i)));
        orderString.push(
          <div id={"item" + i} key={i} style={{ display: "flex" }}>
            <p>
              {JSON.parse(localStorage.getItem(i)).name} - price:{" "}
              {JSON.parse(localStorage.getItem(i)).price} kr - number:{" "}
              {JSON.parse(localStorage.getItem(i)).number}
            </p>
            <button style={btnRemove} onClick={() => removeItem(i)}>
              X
            </button>
          </div>
        );
      } catch (error) {}
    }
    console.log(orderString);
    return orderString;
  }

  return (
    <div style={{ height: "100%", fontFamily: "PT Sans Narrow" }}>
      <div style={backgroundStyle}></div>
      <div style={foregroundStyle}>
        <div style={box}>
          <p style={textStyle}>Order</p>
          <div style={orderText} id="order">
            {orderList()}
          </div>
          <Link style={btnOrder} to="/payment">
            <div>
              <p>ORDER</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

const btnRemove = {
  background: "#FFA07A",
  color: "#212121",
  fontWeight: "bold",
  fontSize: "40px",
  margin: "0px",
  marginLeft: "10px",
  cursor: "pointer",
};

const orderText = {
  margin: "40px",
  fontSize: "18px",
  color: "#FFA07A",
};

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
  fontSize: "40px",
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
export default Order;
