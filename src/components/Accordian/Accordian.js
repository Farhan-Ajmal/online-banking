import React,{ useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
// import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import data from './data'
import Question from './Question'
export default function Faq() {
  const [query, setQuestions] = useState(data)

  return (
    <div className=''>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>

  )
}
