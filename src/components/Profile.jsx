import React, { useState } from "react";

export default function Profile() {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const onImageChange = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setImagePreview(URL.createObjectURL(image));
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img
        src={imagePreview}
        alt="preview"
        style={{ width: 500, marginBottom: 5 }}
      />
      <input type="file" onChange={onImageChange} />
    </div>
  );
}
