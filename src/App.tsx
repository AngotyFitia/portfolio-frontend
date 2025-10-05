import { useEffect, useState } from "react";

type ApiResponse = {
  message: string;
};

type PostResponse = {
  status: string;
  data: any;
};

function App() {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    fetch("https://portfolio-backend-5cpq.onrender.com/api")
      .then(res => res.json())
      .then((data: ApiResponse) => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  const sendData = () => {
    fetch("https://portfolio-backend-5cpq.onrender.com/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Angoty" })
    })
      .then(res => res.json())
      .then((data: PostResponse) => console.log(data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={sendData}>Envoyer des données</button>
    </div>
  );
}

export default App;
