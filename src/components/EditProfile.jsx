import React, { useState } from "react";
import axios from "../utils/axios";
import { useSelector } from "react-redux";

export default function EditProfile() {
  const token = useSelector((state) => state.auth.token);
  const { id, name, email } = useSelector((state) => state.auth.user);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [formState, setFormState] = useState({
    name: name,
    email: email,
    password: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const onSaveData = async () => {
    try {
      if (!formState.name || !formState.email)
        return alert("Name or Email can not be empty");
      const formData = new FormData();
      formData.append("photo", image);
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("password", formState.password);

      const res = await axios.put(`/users/${id}`, formData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      alert("Update success");
      console.log({ res });
    } catch (error) {
      console.log({ error });
    }
  };

  const onImageChange = (e) => {
    const image = e.target.files[0];
    setImage(image);
    setImagePreview(URL.createObjectURL(image));
  };

  return (
    <div
      style={{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div
        style={{ margin: "30px 0", display: "flex", flexDirection: "column" }}
      >
        <img
          src={imagePreview}
          alt="preview"
          style={{ width: 500, marginBottom: 5 }}
        />
        <input type="file" onChange={onImageChange} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: 200,
          justifyContent: "space-around",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formState.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          value={formState.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button onClick={onSaveData}>Save Data</button>
      </div>
    </div>
  );
}
