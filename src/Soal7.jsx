import { useEffect } from "react";
import axios from "axios";

function Soal7() {
  useEffect(() => {
    async function muat() {
      // Cetak NIM di console sesuai aturan Soal 7
      console.log("NIM: 103022400101");
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      console.log(response);
      console.log("Status:", response.status);
      console.log("Data:", response.data);
    }
    muat();
  }, []);

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>NIM: 103022400101</p>
      <p>Buka Console DevTools (F12) untuk melihat hasil log.</p>
    </div>
  );
}

export default Soal7;