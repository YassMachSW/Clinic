import "./WhatsAppButton.css"; // נוסיף קובץ CSS קטן

export default function WhatsAppButton() {
const phone="972545317545";
  const message="שלום! אני מתעניין באתר שלך";
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
      <h6 className="whatsapp-title">שליחת הודעת WhatsApp</h6>
      <button className="whatsapp-button" onClick={sendWhatsApp}>
        שלח WhatsApp
      </button>
    </div>
  );
}
