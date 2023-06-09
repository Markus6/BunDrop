import React from "react";
import { Link } from "react-router-dom";

function Payment() {
  let firstName = "";
  let lastName = "";
  let zipCode = "";
  let city = "";
  let country = "";
  let address = "";
  let email = "";
  let creditCardNumber = "";
  let month = "";
  let year = "";
  let cvc = "";

  console.log(firstName + lastName);

  function handleSubmit() {
    console.log(firstName + lastName);
  }

  function handleFirstNameChange(e) {
    firstName = e.target.value;
  }

  function handleLastNameChange(e) {
    lastName = e.target.value;
  }

  function handleZipCodeChange(e) {
    zipCode = e.target.value;
  }

  function handleCityChange(e) {
    city = e.target.value;
  }

  function handleCountryChange(e) {
    country = e.target.value;
  }

  function handleAddressChange(e) {
    address = e.target.value;
  }

  function handleEmailChange(e) {
    email = e.target.value;
  }

  function handleCardNumberChange(e) {
    creditCardNumber = e.target.value;
  }

  function handleMonthChange(e) {
    month = e.target.value;
  }

  function handleYearChange(e) {
    year = e.target.value;
  }

  function handleCVCChange(e) {
    cvc = e.target.value;
  }

  return (
    <div style={{ height: "100%", fontFamily: "PT Sans Narrow" }}>
      <div style={backgroundStyle}></div>
      <div style={foregroundStyle}>
        <div style={box}>
          <p style={textStyle}>Payment</p>
          <form>
            <label>
              <input
                type="text"
                placeholder="First name"
                onChange={handleFirstNameChange}
              />
              <input
                type="text"
                placeholder="First name"
                onChange={handleLastNameChange}
              />
              <input
                type="text"
                placeholder="ZIP code"
                onChange={handleZipCodeChange}
              />
              <input
                type="text"
                placeholder="City"
                onChange={handleCityChange}
              />
              <input
                type="text"
                placeholder="Country"
                onChange={handleCountryChange}
              />
              <input
                type="text"
                placeholder="Address"
                onChange={handleAddressChange}
              />
              <input
                type="text"
                placeholder="Email"
                onChange={handleEmailChange}
              />
              <input
                type="text"
                placeholder="Credit Card Number"
                onChange={handleCardNumberChange}
              />
              <input
                type="text"
                placeholder="Month"
                onChange={handleMonthChange}
              />
              <input
                type="text"
                placeholder="Year"
                onChange={handleYearChange}
              />
              <input type="text" placeholder="CVC" onChange={handleCVCChange} />
            </label>
            <input type="button" value="PAY" onClick={handleSubmit} />
          </form>
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
export default Payment;
