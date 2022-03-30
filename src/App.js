import React,{useState} from 'react'
import Navbar from './Navbar';
import Questions from './Questions';
import { questions } from './data';

const App = () => {
  const [question, setQuestion] = useState(questions);

  return (
    <>
      <Navbar />
      <main>
        <section className="section-center">
          <div className="title">
            <h2>question and answers about logins</h2>
            <div className="underline"></div>
          </div>
          <article className="questions">
            {question.map((text) => {
              return (
                <Questions key={text.id} {...text}/>
              )
            })}
          </article>
        </section>
      </main>
    </>
  )
}

export default App