import { useState, useEffect } from "react";
import axios from "axios";

function Soal3() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function muat() {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users?_limit=5"
      );
      setItems(response.data);
    } catch (err) {
      if (err.response) {
        setError("Data tidak ditemukan atau server bermasalah.");
      } else {
        setError("Periksa koneksi internet Anda.");
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    muat();
  }, []);

  if (loading)
    return (
      <div>
        <p style={{ fontWeight: "bold" }}>NIM: 103022400101</p>
        <p>Memuat data...</p>
      </div>
    );

  if (error) {
    return (
      <div>
        <p style={{ fontWeight: "bold" }}>NIM: 103022400101</p>
        <p>{error}</p>
        <button onClick={muat}>Coba lagi</button>
      </div>
    );
  }

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

export default Soal3;