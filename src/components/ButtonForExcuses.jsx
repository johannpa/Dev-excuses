import React, {useState} from 'react';
import data from '../data/data.json';

const ButtonForExcuses = (props) => {
    const [message, setMessage] = useState("Rien pour le moment mais... click");

    const handleExcuse = () => {
        let randomValue = data[Math.floor(Math.random() * data.length)];
        setMessage(randomValue['message '].trim());
    }
  return (
    <div>

        <button onClick={handleExcuse}>Message</button>
    </div>
  )
}

export default ButtonForExcuses;
