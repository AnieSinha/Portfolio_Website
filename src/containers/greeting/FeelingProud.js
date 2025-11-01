import React from "react";

export default function FeelingProud(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={require("../../assests/images/feelingProudGirl.png")}
        alt="Girl coding on laptop illustration"
        style={{
          width: "100%",
          maxWidth: "450px",
          height: "auto",
          background: "none",
          border: "none",
          boxShadow: "none",
        }}
      />
    </div>
  );
}
