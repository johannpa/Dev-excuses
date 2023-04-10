import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Lost = () => {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/', { replace: true});
    }, 5000);
  }, [navigate]);

  return (
    <div>
      <h1>I'am lost</h1>
      <iframe src="https://giphy.com/embed/QBGqqaOt8qKCHJdVw3" title='lost' width="480" height="270"></iframe>
    </div>
  )
}

export default Lost;
