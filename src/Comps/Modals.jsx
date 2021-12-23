/** @format */

import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { projectFirestore } from "../Firebase/config";
import "../App.css";

const Modals = ({ selectedImage, setSelectedImage, docId }) => {
  const clickHandler = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImage(null);
    }
  };

  const deleteButtonHandler = () => {
    console.log(docId);
    const docRef = doc(projectFirestore, "images", docId);
    deleteDoc(docRef).then(() => {
      console.log("Document Deleted");
    });
  };
  return (
    <div className="backdrop" onClick={clickHandler}>
      <button onClick={deleteButtonHandler}>delete</button>
      <img src={selectedImage} alt="" />
    </div>
  );
};

export default Modals;
