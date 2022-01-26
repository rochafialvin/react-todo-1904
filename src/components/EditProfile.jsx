import React, { useState } from "react";
import axios from "../utils/axios";
import { useSelector } from "react-redux";

export default function EditProfile() {
  const token = useSelector((state) => state.auth.token);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const onEditProfile = async () => {
    try {
      const data = new FormData();
      data.append("photo", image);

      const res = await axios.post("/users/upload", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      alert(res.data.message);
    } catch (error) {
      console.log({ gagal: error });
    }
  };

  const onImageChange = (e) => {
    const image = e.target.files[0];
    setImage(image);
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
      <button onClick={onEditProfile}>Save</button>
    </div>
  );
}
