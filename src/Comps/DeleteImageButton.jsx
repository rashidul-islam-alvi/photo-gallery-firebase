/** @format */

import React from "react";
import "../App.css";
import { projectFirestore } from "../Firebase/config";
import { deleteDoc, doc } from "firebase/firestore";

const DeleteImageButton = (id) => {
  const docID = [];
  docID.push(id);
  console.log(docID);
  return (
    <div className="deleteImageButton">
      <h3 className="preview-button">Preview</h3>
      <h3 className="delete-button">Delete</h3>
    </div>
  );
};

export default DeleteImageButton;
