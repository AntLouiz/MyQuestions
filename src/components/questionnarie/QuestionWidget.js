import React from 'react'

class QuestionWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id
        }
    }

    handleKeyPress(e) {
        if(e.key === '?')
            e.preventDefault()
        else if(e.key === 'Enter'){
            let value = document.getElementById(`question-input-${this.state.id}`).value
            
            if(value)
                this.props.submitQuestion(this.state.id, value)
         }
        else
            return e
    }


    handleBlur(e) {
        let value = document.getElementById(`question-input-${this.state.id}`).value
        if(value)
            this.props.submitQuestion(this.state.id, value)
    }

    render() {
        return (
            <div>
                <input 
                    id={`question-input-${this.state.id}`}
                    type="text" 
                    onKeyPress={this.handleKeyPress.bind(this)}
                    onBlur={this.handleBlur.bind(this)}
                />?
            </div>
        );
    }
}


export default QuestionWidget