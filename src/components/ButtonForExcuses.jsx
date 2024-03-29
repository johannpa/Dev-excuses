import React, { useState, useEffect } from "react";
import "./Loader.css";

const ButtonForExcuses = () => {
  const [loading, setLoading] = useState();
  const [items, setItems] = useState([]);
  const [num, setNum] = useState(0);
  

  const [message, setMessage] = useState("Rien pour le moment mais... click");

  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
  };

  const getData = () => {
    setLoading(true);
    setTimeout(() => {
      fetch(`https://localhost:7093/excuse`)
        .then((res) => res.json())
        .then((items) => {
          setLoading(false);
          setItems(items);
        });
    }, num);
  };

  useEffect(() => {
    getData();
  }, [message]);

  

  const handleMessageByHttpCode = (httpCode) => {
    items.filter((item) => {
      if(item.http_code === httpCode) {
        return item.message;
      } else {
        return "Ce http_code n'existe pas";
      }
    });
  }

  const handleExcuseMessage = () => {
    let randomValue = items[Math.floor(Math.random() * items.length)];
    setMessage(randomValue["message"].trim()); // setMessage(randomValue["http_code"]); it works to get the value of the key http_code
  };

  return (
    <div className="container">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="main-containt">
          {<p>{message}</p>}

          <button
            onClick={() => {
              setNum(randomNumber(0, 5));
              handleExcuseMessage();
            }}
          >
            Message
          </button>
          {/* {console.log(num / 1000 + " secondes d'attente")} */}
        </div>
      )}
    </div>
  );
};

export default ButtonForExcuses;
