import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

export default function App() {
  const [health, setHealth] = useState<string>("loading");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/health`)
      .then((r) => (r.ok ? r.json() : Promise.reject(`HTTP ${r.status}`)))
      .then((d) => setHealth(`backend ok: ${JSON.stringify(d)}`))
      .catch((e) => {
        setError(String(e));
        setHealth("backend unreachable");
      });
  }, []);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 24 }}>
      <h1>DeployPilot demo</h1>
      <p>
        API URL: <code>{API_URL}</code>
      </p>
      <p>{health}</p>
      {error && <pre style={{ color: "crimson" }}>{error}</pre>}
    </main>
  );
}