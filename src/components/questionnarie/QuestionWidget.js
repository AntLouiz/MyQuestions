import React from 'react'
import EditInput from '../models/EditInput.js'
import Answer from './questionWidget/Answer.js'

class QuestionWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            description: props.description,
            answers: props.answers
        }
    }

    render() {
        let style = {
            width: "40rem",
            margin: "2rem",
            fontSize: "2rem"
        }

        const Answers = () => {
            if(this.state.answers){
                return (
                    <ul>
                        {this.state.answers.map((answer) => {
                            return (
                                <li key={answer.id}>
                                    <Answer
                                        id={answer.id}
                                        question_id={this.state.id}
                                        description={answer.description}
                                        saveAnswer={
                                            (new_answer) => {
                                                this.setState(() => {
                                                    this.state.answers.push(new_answer);
                                                })
                                            }
                                        }
                                    />
                                </li>
                            );
                        })}
                    </ul>
                );
            }
            else
                return <ul></ul>
        }

        return (
            <div style={style} >
                <EditInput 
                    id={this.state.id} 
                    value={this.state.description}
                    saveInput={(new_desc) => this.setState({description: new_desc})}
                />
                <div>
                    <Answers />
                </div>
            </div>
        );
    }
}


export default QuestionWidget