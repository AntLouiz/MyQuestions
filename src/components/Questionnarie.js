import React from 'react'
import QuestionWidget from './questionnarie/QuestionWidget.js'
import EditInput from './models/EditInput.js'
import shortid from 'shortid'


class Questionnarie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: [
                {
                    id: shortid.generate(),
                    description: "One question",
                    answers: [
                        {
                            id: shortid.generate(),
                            description: "Sim"
                        },
                        {
                            id: shortid.generate(),
                            description: "Nao"
                        }
                    ]
                },
                {
                    id: shortid.generate(),
                    description: "Second question",
                    answers: [
                        {
                            id: shortid.generate(),
                            description: "Sim"
                        },
                        {
                            id: shortid.generate(),
                            description: "Nao"
                        }
                    ]
                }
            ],
            title: undefined,
            description: undefined
        }
    }

    saveQuestionDescription(new_question) {
        this.setState({questions: this.state.questions.filter((question)=>{
            if (question.id === new_question.id){
                question.description = new_question.description;
            }

            return question;
        })});
    }

    render() {
        return (
            <div>
                <div style={{fontSize: "2.5rem", marginLeft: "5rem"}}>
                    <EditInput 
                        id={shortid.generate()} 
                        label={"Title"}
                        value={"Unknown"}
                        saveInput={(new_title) => this.setState({title: new_title})}
                    />
                    <EditInput 
                        id={shortid.generate()} 
                        label={"Description"}
                        value={"Unknown"}
                        saveInput={(desc) => this.setState({description: desc})}
                    />
                </div>
                <ul style={{listStyle: "katakana"}}>
                    {this.state.questions.map((question) => {
                        return (
                            <li key={question.id}>
                                <QuestionWidget
                                    id={question.id}
                                    description={question.description}
                                    answers={question.answers}
                                    saveQuestionDescription={this.saveQuestionDescription.bind(this)}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}


export default Questionnarie