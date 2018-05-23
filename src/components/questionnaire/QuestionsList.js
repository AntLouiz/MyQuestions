import React from 'react'
import QuestionWidget from './QuestionWidget.js'

const QuestionsList = (props) => {
  return (
    <ul style={{listStyle: "decimal"}}>
      <For each="question" of={props.questions}>
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
      </For>
    </ul>
  );
}

export default QuestionsList;