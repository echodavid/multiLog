import React, { useState } from 'react';
import '../styles/Messages.css';
import axios from 'axios';

import FormData from 'form-data';


const Messages = ({ user, option }) => {
  const [text, setText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null); 
  const [previewImage, setPreviewImage] = useState(null); // Added state for preview image

  const url = "http://127.0.0.1:5002/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    let username = user.username;
    let password = user.password;
    let texto = text;
    let formData = new FormData();

    if (selectedFile) {
      formData.append("media", selectedFile, selectedFile.name);
    }

    try {
      const response = await axios.post(`${url}${option}/post?email=${username}&passwd=${password}&text=${texto}`, formData, {
        headers: {
          "accept": "application/json",
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);
    } catch (error) {
      // Manejar errores de red
      alert("Error de conexión");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreviewImage(URL.createObjectURL(file)); // Set preview image URL
  };

  return (
    <div className="comments container" style={{ maxHeight: '90vh', overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
      <h1>Create a post, {user.username}</h1>
      {previewImage && <img src={previewImage} alt="Preview" style={{ maxWidth: '35%', marginBottom: '1rem' }} />} {/* Display preview image */}
      <form onSubmit={handleSubmit}>
        <textarea
          value={text} className="input-text" placeholder="Write your post"
            onChange={e => setText(e.target.value)} ></textarea>
          <input type="file" className="input-file" accept="image/*" onChange={handleFileChange} /> {/* Call handleFileChange on file selection */}
        <button className="submit-button">Publish</button>
      </form>
    </div>
  );
};

export default Messages;