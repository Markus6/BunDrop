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
  let phoneNumber = "";

  console.log(firstName + lastName);

  function handleSubmit() {
    if (
      firstName !== "" &&
      lastName !== "" &&
      zipCode !== "" &&
      city !== "" &&
      country !== "" &&
      address !== "" &&
      email !== "" &&
      creditCardNumber !== "" &&
      month !== "" &&
      year !== "" &&
      cvc !== ""
    )
      window.location.href = "/confirmation";
  }
  function handleSwishSubmit() {
    if (phoneNumber !== "") window.location.href = "/confirmation";
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
  function handlePhoneChange(e) {
    phoneNumber = e.target.value;
  }

  return (
    <div style={{ height: "100%", fontFamily: "PT Sans Narrow" }}>
      <div style={backgroundStyle}></div>
      <div style={foregroundStyle}>
        <div style={box}>
          <p style={textStyle}>Payment</p>
          <form style={{ margin: "40px" }}>
            <label>
              <p style={{ fontSize: "40px" }}>Customer info</p>
              <input
                style={inputStyle}
                type="text"
                placeholder="First name"
                onChange={handleFirstNameChange}
              />
              <input
                style={inputStyle}
                type="text"
                placeholder="Last name"
                onChange={handleLastNameChange}
              />
              <input
                style={inputStyle}
                type="text"
                placeholder="ZIP code"
                onChange={handleZipCodeChange}
              />
              <input
                style={inputStyle}
                type="text"
                placeholder="City"
                onChange={handleCityChange}
              />
              <input
                style={inputStyle}
                type="text"
                placeholder="Country"
                onChange={handleCountryChange}
              />
              <input
                style={inputStyle}
                type="text"
                placeholder="Address"
                onChange={handleAddressChange}
              />
              <input
                style={inputStyle}
                type="text"
                placeholder="Email"
                onChange={handleEmailChange}
              />
              <p style={{ fontSize: "40px" }}>Payment info</p>
              <p style={{ fontSize: "30px" }}>Credit card</p>
              <input
                style={inputStyle}
                type="text"
                placeholder="Credit Card Number"
                onChange={handleCardNumberChange}
              />
              <input
                style={inputStyle}
                type="text"
                placeholder="Month"
                onChange={handleMonthChange}
              />
              <input
                style={inputStyle}
                type="text"
                placeholder="Year"
                onChange={handleYearChange}
              />
              <input
                style={inputStyle}
                type="text"
                placeholder="CVC"
                onChange={handleCVCChange}
              />
              <input
                style={btnPay}
                type="button"
                value="PAY"
                onClick={handleSubmit}
              />
              <p style={{ fontSize: "30px" }}>or swish to: 123456789</p>
              <input
                style={inputStyle}
                type="text"
                placeholder="Phone number"
                onChange={handlePhoneChange}
              />
              <input
                style={btnPay}
                type="button"
                value="Swish"
                onClick={handleSwishSubmit}
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  margin: "5px",
  padding: "5px",
  height: "20px",
  borderRadius: "20px",
};

const btnPay = {
  display: "flex",
  fontSize: "30px",
  color: "#212121",
  textDecoration: "none",
  background: "#FFA07A",
  borderRadius: "40px",
  width: "200px",
  maxWidth: "60vw",
  maxHeight: "10vh",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  padding: "20px",
  marginBottom: "50px",
  marginTop: "50px",
  fontWeight: "bold",
};

const textStyle = {
  fontSize: "50px",
  margin: "40px",
  fontWeight: "bold",
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
