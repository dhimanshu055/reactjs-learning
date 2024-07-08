// src/App.js
import React, { useState } from "react";

import Usestt from './Compo/Usestate&eff/Usestt';

import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://mocki.io/v1/c9d1a126-f1bd-49a9-a289-a3c5ad0ce9d7"
      );
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Fetch API Data</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <p>Status: {data.status}</p>
          <p>Username: {data.data.username}</p>
          <p>Message: {data.message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
