import React, { useState } from "react";
import "./WhatsAppButton.css"; // נוסיף קובץ CSS קטן

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
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-container">
      <h2 className="whatsapp-title">שליחת הודעת WhatsApp</h2>

      <input
        type="text"
        className="whatsapp-input"
        placeholder="לדוגמה: 972501234567"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <textarea
        className="whatsapp-textarea"
        placeholder="כתוב כאן את ההודעה שלך"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button className="whatsapp-button" onClick={sendWhatsApp}>
        שלח WhatsApp
      </button>
    </div>
  );
}
