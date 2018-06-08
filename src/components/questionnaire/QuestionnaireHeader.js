import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import EditInput from '../models/EditInput.js'
  
const QuestionnaireHeader = (props) => {
  return (
            <div style={{
              fontSize: "1.5rem", 
              marginLeft: "5rem", 
              marginRight: "5rem",
              padding: "2rem"
            }}>
                  <EditInput 
                      id={shortid.generate()} 
                      label={"Title"}
                      value={props.title}
                      placeholder={"Insert the title"}
                      saveInput={props.editTitle}
                      editInput={props.editTitle}
                  />
                  <EditInput 
                      id={shortid.generate()} 
                      label={"Description"}
                      value={props.description}
                      placeholder={"Insert the description"}
                      saveInput={props.editDescription}
                      editInput={props.editDescription}
                  />
                  <button state
                      className="button is-success is-rounded"
                      onClick={props.addQuestion}
                  >
                      Add question
                  </button>
              </div> 
  );
}

QuestionnaireHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  editTitle: PropTypes.func,
  editDescription: PropTypes.func,
  addQuestion: PropTypes.func
}

export default QuestionnaireHeader