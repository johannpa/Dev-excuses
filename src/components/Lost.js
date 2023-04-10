import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Lost = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/', { replace: true});
    }, 5000);
  }, []);

  return (
    <div>
      <h1>I'am lost</h1>
      <iframe src="https://giphy.com/embed/QBGqqaOt8qKCHJdVw3" width="480" height="270" className="giphy-embed" allowFullScreen></iframe>
    </div>
  )
}

export default Lost;
