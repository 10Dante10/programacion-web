import React, { useState } from "react";

function Admin() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, description, photo });
    alert("Post agregado (simulación)");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agregar Nuevo Post</h2>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="URL de la Foto"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />
      <button type="submit">Agregar Post</button>
    </form>
  );
}

export default Admin;
