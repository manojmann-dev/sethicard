import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Checking backend...");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/health")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Backend connection error:", error);
        setMessage("Backend connection failed");
      });
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-primary">
        Printing Press Workshop SaaS
      </h1>

      <p className="lead">
        React Frontend is working.
      </p>

      <div className="alert alert-info">
        Backend Status: {message}
      </div>
    </div>
  );
}

export default App;