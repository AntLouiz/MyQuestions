import React from 'react'
import PropTypes from 'prop-types'
import QuestionWidget from './QuestionWidget.js'

const QuestionsList = (props) => {
  return (
    <ul style={{
      listStyle: "decimal", 
      padding: "1rem",
      marginLeft: "2rem"}}
    >
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

QuestionsList.propTypes = {
  questions: PropTypes.array,
  editQuestion: PropTypes.func,
  removeQuestion: PropTypes.func,
  addAnswer: PropTypes.func,
  editAnswer: PropTypes.func,
  removeAnswer: PropTypes.func
}

export default QuestionsList;