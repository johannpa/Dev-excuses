import React from 'react';
import { useParams } from 'react-router-dom';


function Http_code() {
  const { http_code } = useParams();
  
  const excuse = Data.find(object => {
    return object.http_code === http_code;
  });


  return (
    <div>
       { excuse ? (
        <div>
          <h2>{excuse.message}</h2>
        </div>
       ) : (
         <h2>Try another number (between 701 and 799)</h2>
       )

       }
    </div>
  );
}

export default Http_code;