import React, { useState } from "react";

const Exercise5 = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleButtonClick = () => {
    const fullName = `${firstName} ${lastName}`;
    setFullName(fullName);
    setMessage(textResult(fullName));
  };
  const isInvalidFirstName = () => {
    const fn = firstName;
    return fn.trim() === "";
  };
  const isInvalidLastName = () => {
    const ln = lastName;
    return ln.trim() === "";
  };
  const textResult = (fullName:string) => {
    if (isInvalidFirstName() && isInvalidLastName())
      return "Please enter first name and last name...";
    if (isInvalidFirstName()) return "Please enter first name...";
    if (isInvalidLastName()) return "Please enter last name...";
    return `Your full name is ${fullName}`;
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <input
          type="text"
          id="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          style={{
            fontSize: "16px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            width: "260px",
          }}
        />
      </div>
      <div>
        <input
          type="text"
          id="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          style={{
            fontSize: "16px",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
            width: "260px",
          }}
        />
      </div>
      <button
        onClick={handleButtonClick}
        style={{
          border: "none",
          fontSize: "20px",
          color: "#fff",
          backgroundColor: "#f0153b",
          padding: "10px 50px",
          fontWeight: "700",
          width: "280px",
          borderRadius: "10px",
          borderBottom: "5px solid #a30d36",
          cursor: "pointer",
        }}
      >
        GREET ME
      </button>
      {fullName && (
        <p style={{ fontSize: "20px", fontWeight: "700" }}>{message}</p>
      )}
    </div>
  );
};

export default Exercise5;
