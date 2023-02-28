import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";

// Import Required Firebase Utility

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

// Create an instance of the imported firebase utility
const db = getFirestore(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = (props) => {
  // Create the required function for using the internal functions of the utility imported

  const addDocument = async (dbType, data) => {
    try {
      await addDoc(collection(db, dbType), data);

      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <FirebaseContext.Provider
      value={{
        // Pass the functions created to be used globally
        addDocument,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
