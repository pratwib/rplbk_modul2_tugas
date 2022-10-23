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
            <div className="profile-card">
              <div className="card-header">
                <h3>{item.nama_lengkap}</h3>
                <div className="img-profile">
                  <img src="https://img2.pngdownload.id/20180522/wll/kisspng-logo-black-white-font-apropoe-s-5b03bdd117fc68.8758133115269718570983.jpg"></img>
                </div>
              </div>

              <div className="card-body">
                <table border={0}>
                  <tr>
                    <td>Nama Panggilan</td>
                    <td>:</td>
                    <td>{item.nama_panggilan}</td>
                  </tr>
                  <tr>
                    <td>NIM</td>
                    <td>:</td>
                    <td>{item.nim}</td>
                  </tr>
                  <tr>
                    <td>No. Handphone</td>
                    <td>:</td>
                    <td>{item.nomor_telepon}</td>
                  </tr>
                  <tr>
                    <td>Hobi</td>
                    <td>:</td>
                    <td>{item.hobi}</td>
                  </tr>
                </table>
              </div>

              <div className="card-footer">
                <div className="medsos">
                  <img src="https://i.pinimg.com/originals/1b/3b/ec/1b3bec070f7bb1c007dbaaeafaeb21b7.png"></img>
                  <p> {item.email}</p>
                </div>
                <div className="medsos">
                  <img src="https://cdn.iconscout.com/icon/free/png-256/line-messenger-675693.png"></img>
                  <p> {item.id_line}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
