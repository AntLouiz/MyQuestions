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
                    description: "One question",
                    aswers: ["Sim", "Nao"]
                },
                {
                    description: "Second question",
                    aswers: ["Sim", "Nao"]
                }
            ],
            title: undefined,
            description: undefined
        }
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
                        let question_id = shortid.generate()
                        return (
                            <li key={question_id}>
                                <QuestionWidget
                                    description={question.description}
                                    aswers={question.aswers}
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