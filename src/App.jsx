import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton"
import './App.css'

const CPHONE = "+97249913934"; // tel: link

const PHONE = "+972545317545"; // tel: link

const DISPLAY_PHONE = "+972 545317545"; // displayed to users
const CREATOR_NAME = "Yassmine Machour"; // footer credit
const DISPLAY_CPHONE = "+972 49913934"; // displayed to users


const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSebCBQZM_ZeiKyGwekXw4Xcy74tjTzU2T_fhWuAT9rG7B_C5g/viewform?usp=sharing&ouid=117001172827928974203";


  // Location coordinates
const MAP_LAT = 32.92695963235956;
const MAP_LNG = 35.07578021337072;

const AI_IMAGE_PATH = "/doctor-dentist-ai.jpg";
function openMaps(app = "google") {
  const lat = MAP_LAT;
  const lng = MAP_LNG;

  if (app === "google") {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      "_blank"
    );
  } else if (app === "waze") {
    window.open(`https://waze.com/ul?ll=${lat}%2C${lng}&navigate=yes`, "_blank");
  } else {
    window.open(`geo:${lat},${lng}?q=${lat},${lng}`, "_blank");
  }
}
function App() {

  return (
    <>
       <div className="app">
      {/* Header */}
      <header className="header">
        <h1 className="logo">Premium Clinic</h1>
        <a href={`tel:${CPHONE}`} className="call-btn">
          📞 {DISPLAY_CPHONE}
        </a>

          
      </header>

      {/* Main content */}
      <main className="main">
        {/* Left - Team */}
        <motion.section
          className="card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Friendly Team</h2>
          <p>Meet our professional doctor and dentist.</p>
          <img
            src={AI_IMAGE_PATH}
            alt="Doctor and dentist smiling"
            onError={(e) =>
              (e.currentTarget.src =
                "https://via.placeholder.com/600x400?text=Add+your+AI+image")
            }
          />
        </motion.section>
        <WhatsAppButton />
        {/* Right - Contact */}
        <section className="card">
          <h2>Contact & Location</h2>
          <p>Find us easily using your favorite maps app.</p>
          <div className="map-buttons">
            <button onClick={() => openMaps("google")}>Open in Google Maps</button>
            <button onClick={() => openMaps("waze")}>Open in Waze</button>
          </div>
          <p className="small-text">
            Or tap to call us: <a href={`tel:${CPHONE}`}>{DISPLAY_CPHONE}</a>
          </p>
        </section>

        {/* Full width - Google Form */}
        <section className="card form-card">
          <h2>Book an Appointment</h2>
          <iframe
            src={GOOGLE_FORM_EMBED_URL}
            title="Google Form"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          Created by <strong>{CREATOR_NAME}</strong>
        </p>
        <p>
          Contact me: <a href={`tel:${PHONE}`}>{DISPLAY_PHONE}</a>
        </p>
      </footer>
    </div>
      
    </>
  )
}

export default App
