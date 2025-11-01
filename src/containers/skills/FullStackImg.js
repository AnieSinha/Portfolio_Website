import React from "react";

export default function FullStackImg(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={require("../../assests/images/fullstackGirl.png")}
        alt="Girl working on laptop illustration"
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
