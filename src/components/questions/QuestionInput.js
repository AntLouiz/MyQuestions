import React from 'react'
import shortid from 'shortid'

class QuestionInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: shortid.generate()
        }
    }

    handleKeyDown(e) {
        if(e.key === '?')
            e.preventDefault()
        else if(e.key === 'Enter'){
            let value = document.getElementById(`question-input-${this.state.id}`).value
            
            if(value)
                props.addOption(value)
         }
        else
            return e
    }


    handleBlur(e) {
        let value = document.getElementById(`question-input-${this.state.id}`).value
        if(value)
            props.addOption(value)
    }

    render() {
        return (
            <div>
                <input 
                    id={`question-input-${this.state.id}`}
                    type="text" 
                    onKeyDown={this.handleKeyDown.bind(this)}
                    onBlur={this.handleBlur.bind(this)}
                />?
            </div>
        );
    }
}


export default QuestionInput