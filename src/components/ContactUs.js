import React, { useState } from "react";
import "./ContactUs.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

function ContactUs() {
const firebaseConfig = {
  apiKey: "AIzaSyCh0PGOGCuPPw6_eFIffC5ftALVzfhr9i4",
  authDomain: "jagriti-cc939.firebaseapp.com",
  projectId: "jagriti-cc939",
  storageBucket: "jagriti-cc939.appspot.com",
  messagingSenderId: "492550131268",
  appId: "1:492550131268:web:6f5c06a83905de3a52b611",
};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [note, setNote] = useState("");

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "contact-form"), {
        customerName: name,
        customerEmail: email,
        customerPhone: number,
        customerNote: note,
      });
      console.log("data sent");
      setName("");
      setEmail("");
      setNote("");
      setNumber("");
    } catch (e) {
      console.log("error: ", e);
    }
  };

  return (
    <div>
      <div className="contact-us">
        <form action="#" className="contact-form" onSubmit={handleSubmit}>
          <label>
            NAME <em>*</em>
          </label>
          <input
            id="customerName"
            required
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>
            EMAIL <em>*</em>
          </label>
          <input
            id="customerEmail"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>PHONE</label>
          <input
            id="customerPhone"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <label>
            YOUR MESSAGE <em>*</em>
          </label>
          <textarea
            id="customerNote"
            required
            rows={4}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <h3>Please provide all the information about your issue you can.</h3>
          <button id="customerOrder" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
