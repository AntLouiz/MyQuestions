import React from 'react';
import shortid from 'shortid';
import EditInput from '../../../models/EditInput.js';

const RadioAnswer = (props) => {
    let radio_input_style = {
        marginTop: "0.5rem",
        marginRight: "1rem",
        padding: "1rem"
    }

    let div_style = {
        display: "flex"
    }

    return (
      <div style={div_style}>
          <input 
              type="radio" 
              style={radio_input_style} 
              value={props.description}
              name={`answer_from_question${props.question_id}`}
          />
          <EditInput 
              id={shortid.generate()} 
              value={props.description}
              placeholder={"Insert the answer"}
              saveInput={props.saveAnswer.bind(this)}
              editInput={props.editAnswer.bind(this)}
          />
      </div>
    )
}

export default RadioAnswer;