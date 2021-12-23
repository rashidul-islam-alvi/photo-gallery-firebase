/** @format */

import { useState, useEffect } from "react";
import {
  projectFirestore,
  projectStorage,
  timestamp,
} from "../Firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = ref(projectStorage, file.name);
    const collectionRef = collection(projectFirestore, "images");

    const uploadImage = uploadBytesResumable(storageRef, file);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        let percentages =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentages);
      },
      (err) => {
        setError(err);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const createdAt = timestamp;
          addDoc(collectionRef, {
            url: url,
            createdAt: createdAt,
          }).then(() => {
            console.log("Document Added");
          });
          setUrl(url);
        });
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
