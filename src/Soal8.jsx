import { useState, useEffect } from "react";
import axios from "axios";

function Soal8() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function muat() {
      try {
        setLoading(true);
        setError(null);
        // URL Normal: "https://jsonplaceholder.typicode.com/users?_limit=5"
        const response = await axios.get(
          "https://jsonplaceholder.typicodex.com/users?_limit=5"
        );
        setItems(response.data);
      } catch (err) {
        if (err.response) {
          if (err.response.status === 404) {
            setError("Data tidak ditemukan.");
          } else {
            setError("Server sedang bermasalah, coba lagi nanti.");
          }
        } else {
          setError("Periksa koneksi internet Anda.");
        }
      } finally {
        setLoading(false);
      }
    }
    muat();
  }, []);

  if (loading)
    return (
      <div>
        <p style={{ fontWeight: "bold" }}>NIM: 103022400101</p>
        <p>Memuat data...</p>
      </div>
    );

  if (error)
    return (
      <div>
        <p style={{ fontWeight: "bold" }}>NIM: 103022400101</p>
        <p>{error}</p>
      </div>
    );

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>NIM: 103022400101</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Soal8;