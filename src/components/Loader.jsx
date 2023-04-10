import React, {useState, useEffect} from 'react';
import "./Loader.css";


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
                <div>
                    
                    
                </div>
            </div>
        )}
      
    </div>
  )
}

export default Loader;
