import { useState, useEffect } from "react";
import axios from "axios";

// Komponen kartu terpisah menerima props judul dan keterangan
function CardData({ judul, keterangan }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '8px 0', borderRadius: '6px' }}>
      <h4 style={{ margin: '0 0 4px 0' }}>{judul}</h4>
      <p style={{ margin: 0, color: '#666' }}>{keterangan}</p>
    </div>
  );
}

function Soal4() {
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

  if (loading)
    return (
      <div>
        <p style={{ fontWeight: 'bold' }}>NIM: 103022400101</p>
        <p>Memuat data...</p>
      </div>
    );

  return (
    <div>
      <p style={{ fontWeight: 'bold' }}>NIM: 103022400101</p>
      {items.map((item) => (
        <CardData
          key={item.id}
          judul={item.name}
          keterangan={item.email}
        />
      ))}
    </div>
  );
}

export default Soal4;