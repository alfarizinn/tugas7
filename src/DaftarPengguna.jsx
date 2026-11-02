import { useState, useEffect } from "react";
import axios from "axios";

function DaftarPengguna() {
  const [pengguna, setPengguna] = useState([]);
  const [status, setStatus] = useState("loading"); // "loading" | "success" | "error"

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then((response) => {
        setPengguna(response.data);
        setStatus("success");
      })
      .catch(() => {
        setStatus("error");
      });
  }, []);

  return (
    <div>
      <p style={{ fontWeight: 'bold' }}>NIM: 103022400101</p>
      <h2>Daftar Pengguna</h2>
      {status === "loading" && <p>Memuat pengguna...</p>}
      {status === "error" && <p>Terjadi kesalahan saat mengambil data.</p>}
      {status === "success" &&
        pengguna.map((user) => <p key={user.id}>{user.name}</p>)}
    </div>
  );
}

export default DaftarPengguna;