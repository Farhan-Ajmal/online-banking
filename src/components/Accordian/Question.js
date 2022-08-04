import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <div className="col-6 col-md-6 col-lg-6" style={{display: 'inline', padding: '20px'}}>
      <header>
      <button className='btn' style={{display: 'inline'}} onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        <h4 style={{display: 'inline'}}>{title}</h4>
        
      </header>
      {showInfo && <p>{info}</p>}
      </div>
      <div className="col-md-6 col-lg-6">

      </div>
    </article>
  );
};

export default Question;
