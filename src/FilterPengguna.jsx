import { useState, useEffect } from "react";
import axios from "axios";

function FilterPengguna() {
  const [userId, setUserId] = useState("1");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function muat() {
      setLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?id=${userId}`
      );
      setUsers(response.data);
      setLoading(false);
    }
    muat();
  }, [userId]);

  return (
    <div>
      <p style={{ fontWeight: "bold" }}>NIM: 103022400101</p>
      <select value={userId} onChange={(e) => setUserId(e.target.value)}>
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>
            User {n}
          </option>
        ))}
      </select>

      {loading ? (
        <p>Memuat data...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterPengguna;