import React, { useState } from "react";

export default function WhatsAppButton() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("שלום! אני מתעניין באתר שלך");

  const sendWhatsApp = () => {
    if (!phone) {
      alert("נא להזין מספר טלפון עם קידומת בינלאומית");
      return;
    }
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, "_blank"); // פותח חלון חדש ל־WhatsApp
  };

  return (
    <div style={{ marginTop: "2rem", textAlign: "center" }}>
      <h2>שליחת הודעת WhatsApp</h2>
      <input
        type="text"
        placeholder="לדוגמה: 972501234567"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ padding: "10px", width: "250px", marginBottom: "10px" }}
      />
      <br />
      <textarea
        placeholder="כתוב כאן את ההודעה שלך"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ padding: "10px", width: "250px", height: "80px", marginBottom: "10px" }}
      />
      <br />
      <button
        onClick={sendWhatsApp}
        style={{
          backgroundColor: "#25D366",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        שלח WhatsApp
      </button>
    </div>
  );
}
