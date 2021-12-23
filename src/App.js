/** @format */

import { useState } from "react";
import "./App.css";
import ImageGrid from "./Comps/ImageGrid";
import Modals from "./Comps/Modals";
import Title from "./Comps/Title";
import UploadForm from "./Comps/UploadForm";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [docId, setDocId] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} setDocId={setDocId} />
      {selectedImage && (
        <Modals
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          docId={docId}
        />
      )}
    </div>
  );
}

export default App;
