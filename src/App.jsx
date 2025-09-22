import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import "./App.css";

const CPHONE = "+97246388395"; // tel: link
const PHONE = "+972545317545"; // tel: link
const DISPLAY_PHONE = "0545317545"; // displayed to users
const CREATOR_NAME = "Yassmine Machour"; // footer credit
const DISPLAY_CPHONE = "046388395"; // displayed to users

const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSebCBQZM_ZeiKyGwekXw4Xcy74tjTzU2T_fhWuAT9rG7B_C5g/viewform?usp=sharing&ouid=117001172827928974203";

// Location coordinates
const MAP_LAT = 32.92695963235956;
const MAP_LNG = 35.07578021337072;

const AI_IMAGE_PATH = "/BOTH.png";

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
          <h3 className="logo">מרפאת משעור</h3>
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
            <center><h2>צוות רופאים מקצועי - ניסיון של עשרות שנים</h2></center>
            <img
              src={AI_IMAGE_PATH}
              alt="Doctor and dentist smiling"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://via.placeholder.com/600x400?text=Add+your+AI+image")
              }
            />

            {/* Doctors Grid */}
            <div className="doctors-grid">
            <motion.div
                className="doctor-card"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <img
                  src="/CAMILLE.jpg"
                  alt="Camille - Family Doctor"
                  className="doctor-img"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://via.placeholder.com/150?text=Camille")
                  }
                />
                <h3>ד״ר כמיל משעור</h3>
                <h5> רופא משפחה - מכבי</h5>
                <p>
                  - רופא משפחה המספק ייעוץ רפואי מקיף לכל בני הבית<br/>
                  - עצמאי<br/>
                  - עובד עם מכבי<br/>
                  - רופא משפחה לכל הגילאים<br/>
                  - אין צורך בקביעת תור מראש<br/>
<b>                  שעות פעילות: א׳–ה׳ 9:00–12:30  19:30-16:00 / ו׳ 9:00–12:30.</b><br/>
                </p>
              </motion.div>

              <motion.div
                className="doctor-card"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <img
                  src="/SAHAR.jpg"
                  alt="Sahar - Dentist"
                  className="doctor-img"
                  onError={(e) =>
                    (e.currentTarget.src =
                      "https://via.placeholder.com/150?text=Sahar")
                  }
                />
                <h3>ד״ר סחר משעור</h3>
                <h5> רופאת שיניים</h5>
                <p>
                  רופאת שיניים עם ניסיון רב בהליכים אסתטיים ורפואיים. 
                  זמינה לקבלת מטופלים בימים א׳–ה׳ בין השעות 9:00–18:00.
                </p>
              </motion.div>

              
            </div>
          </motion.section>

          <WhatsAppButton />
{/* Location Section */}
        <section className="card">
          <h2>מיקום</h2>
          <center>
            <p>אנילביץ' 52 קומה 1 דירה 1.</p>
          </center>
          <div className="map-buttons">
            <button onClick={() => openMaps("google")}>Open in Google Maps</button>
            <button onClick={() => openMaps("waze")}>Open in Waze</button>
          </div>
          <p className="small-text">
            הגעת ולא מצאת? צלצל : <br/>
            <a href={`tel:${CPHONE}`}>{DISPLAY_CPHONE}</a>
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
  );
}

export default App;
