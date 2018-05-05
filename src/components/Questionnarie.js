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
                    answers: ["Sim", "Nao"]
                },
                {
                    id: shortid.generate(),
                    description: "Second question",
                    answers: ["Sim", "Nao"]
                }
            ],
            title: undefined,
            description: undefined
        }
    }

    saveQuestionDescription() {
        //
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
                                    aswers={question.answers}
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