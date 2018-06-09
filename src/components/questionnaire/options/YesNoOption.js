import React from 'react';

const YesNoOption = (props) => {
  return (
    <div>
        <label>
            <input type="text" placeholder="Yes/No question"/>
        </label>
        <button>
            Yes
        </button>
        <button>
            No
        </button>
    </div>
  )
}

export default YesNoOption;