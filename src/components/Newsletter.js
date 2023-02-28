import React, { useState } from "react";
// import { db } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";
import {useFirebase} from "../context/Firebase"

const Newsletter = () => {
  const [email, setEmail] = useState();

  const firebase = useFirebase();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please fill your email ID 😇");
      return;
    }

    // try {
    //   await addDoc(collection(db, "newsletter"), {
    //     email: email,
    //   });
    //   alert("Subscribed");
    //   // console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }

    firebase.addDocument("newsletter", {email});


    setEmail("");
  };
  return (
    <form method="post" onSubmit={handleSubmit} className="d-flex">
      <div className="mb-1">
        <label htmlFor="newsletterEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="wellwisher@email.com"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        <span className="subcribe">Subscribe</span>
      </button>
    </form>
  );
};

export default Newsletter;
