import React from 'react'
import QuestionWidget from './QuestionWidget.js'

const ListQuestions = (props) => {
  return (
    <ul style={{listStyle: "decimal"}}>
      {props.questions.map((question, index) => {
        return (
            <li key={question.id}>
              <QuestionWidget
                  id={question.id}
                  description={question.description}
                  answers={question.answers}
                  questionnaire_id={question.questionnaire_id}

                  editQuestion={props.editQuestion}

                  removeQuestion={props.removeQuestion}
                  addAnswer={props.addAnswer}
                  editAnswer={props.editAnswer}
                  removeAnswer={props.removeAnswer}
              />
            </li>
          )
      })}
    </ul>
  );
}

export default ListQuestions;