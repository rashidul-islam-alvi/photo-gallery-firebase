/** @format */

import React from "react";
import useFirestore from "../Hooks/useFirestore";

const ImageGrid = ({ setSelectedImage, setDocId }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => {
              setSelectedImage(doc.url);
              setDocId(doc.id);
            }}>
            <img src={doc.url} alt="uploaded pic" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
