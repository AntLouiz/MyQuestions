import React from 'react'
import EditInput from '../../models/EditInput.js'
import shortid from 'shortid'

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            question_id: props.question_id,
            description: props.description,
            value: props.value
        }
    }

    saveAnswer(new_desc) {
        this.setState({description: new_desc}, () => {
            this.props.saveAnswer(this.state);
        });
    }

    render() {
        let div_style = {
            display: "flex"
        }

        let radio_input_style = {
            marginTop: "1rem",
            marginRight: "1rem",
            padding: "1rem"
        }

        return (
            <div style={div_style}>
                <input 
                    type="radio" 
                    style={radio_input_style} 
                    value={this.state.description}
                    name={`answer_from_question${this.state.question_id}`}
                />
                <EditInput 
                    id={shortid.generate()} 
                    value={this.state.description}
                    saveInput={this.saveAnswer.bind(this)}
                />
            </div>
        );
    }
}


export default Answer