/** @format */

import { getDocs, orderBy } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { projectFirestore } from "../Firebase/config";

const useFirestore = (collectionString) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    //references

    const collectionRef = collection(projectFirestore, "images");

    getDocs(collectionRef, orderBy("createdAt", "desc")).then((snapshot) => {
      let documents = [];
      snapshot.docs.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });

      setDocs(documents);
    });
  }, [collectionString]);

  return { docs };
};

export default useFirestore;
