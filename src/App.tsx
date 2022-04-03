import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    console.log('get Effect')
    fetch("https://my-try.sekiro.workers.dev/", {
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">{JSON.stringify(data)}</header>
    </div>
  );
}

export default App;
