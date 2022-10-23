import React, { useState, useEffect } from "react";
import "./styles.css";
import { data } from "./data";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => setSearchTerm(e.target.value);

  useEffect(() => {
    const results = data.filter((o) => o.nim.includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>Kelompok 14</h1>
      <h1>Cari Data Aegis</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Ketik NIM Orangnya!"
      />

      {searchResults &&
        searchResults.map((item) => (
          <div key={item.nim[0]} className="results">
            <h5>JrengJreng! Ini Dia Datanya : </h5>


