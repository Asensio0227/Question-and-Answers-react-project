import React, {useState} from 'react';
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa';


const Questions = ({ title, info }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <article className="question">
      <div className="question-title">
        <h4>{title}</h4>
        <button onClick={() => setShowMore(!showMore)} className="question-btn">
          {showMore ? <FaMinusSquare/> : <FaPlusSquare/>}
        </button>
      </div>
      {showMore && <p className="question-text">{info}</p>}
    </article>
  )
}

export default Questions
