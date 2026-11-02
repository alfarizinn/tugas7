import { useState, useEffect } from "react";
import axios from "axios";

function Soal1() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function muat() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users?_limit=5"
      );
      setItems(response.data);
      setLoading(false);
    }
    muat();
  }, []);

  if (loading) return (
    <div>
      <p style={{ fontWeight: 'bold' }}>NIM: 103022400101</p>
      <p>Memuat data...</p>
    </div>
  );

  return (
    <div>
      <p style={{ fontWeight: 'bold' }}>NIM: 103022400101</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Soal1;