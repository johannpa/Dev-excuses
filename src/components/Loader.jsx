import React, {useState, useEffect} from 'react';
import "./Loader.css";
import data from "../data/data.json";

const Loader = () => {
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState(0);
    
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * ((max - min + 1)) + min) * 1000;
    }

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, randomNumber);
    }, [state])

  return (
    <div className='container'>
        {loading ? (
            <div className="loader-container">
                <div className="spinner"></div>
            </div>
        ) : (
            <div className="main-content">
                <h1>Le Loader</h1>
                <div className="button">
                    <button className="btn get-quote" onClick={() => setState(state+1)}>
                        Generate Quote
                    </button>
                </div>
                <div className="quote-section">
                    <blockquote className='quote'>{}</blockquote> -{' '}
                    <span className='author'>{}</span>
                </div>
            </div>
        )}
      
    </div>
  )
}

export default Loader;
