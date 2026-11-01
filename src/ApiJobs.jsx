import React, { useState, useEffect } from 'react';

export default function ApiJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
      if (!response.ok) throw new Error('Gagal mengambil data dari server API.');
      const data = await response.json();
      setJobs(data);
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan jaringan.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#1e293b', marginBottom: '20px' }}>
        Daftar Lowongan Kerja (API External)
      </h2>

      {loading && (
        <div style={{ padding: '16px', backgroundColor: '#eff6ff', color: '#1d4ed8', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
          <strong>Memuat...</strong> Sedang mengambil data lowongan dari server...
        </div>
      )}

      {error && !loading && (
        <div style={{ padding: '16px', backgroundColor: '#fef2f2', color: '#b91c1c', borderRadius: '8px', border: '1px solid #fecaca' }}>
          <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>Terjadi Kesalahan!</p>
          <p style={{ margin: '0 0 12px 0', fontSize: '14px' }}>{error}</p>
          <button
            onClick={fetchJobData}
            style={{ padding: '8px 16px', backgroundColor: '#dc2626', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            🔄 Coba Lagi
          </button>
        </div>
      )}

      {!loading && !error && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
          {jobs.map((item) => (
            <article key={item.id} style={{ padding: '16px', border: '1px solid #e2e8f0', borderRadius: '8px', backgroundColor: '#fff' }}>
              <h3 style={{ margin: '0 0 8px 0', color: '#0f172a', textTransform: 'capitalize' }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>{item.body}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}