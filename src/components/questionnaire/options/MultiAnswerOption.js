import React from 'react';

const MultiAnswerOption = (props) => {
  return (
    <div>
        <input type="text" placeholder="Multi Answer question" />
        <div>
            <label>
                <input type="radio" />
                A
            </label>
            <br/>
            <button>
                Add new answer
            </button>
        </div>
    </div>
  )
}

export default MultiAnswerOption;