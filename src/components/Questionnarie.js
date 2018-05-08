import React from 'react'
import QuestionWidget from '../containers/questions/RemoveQuestions.js'
import EditInput from './models/EditInput.js'
import shortid from 'shortid'
import AddQuestions from '../containers/questions/AddQuestions.js'


class Questionnarie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                        value={this.state.title}
                        placeholder={"Insert the title"}
                        saveInput={(new_title) => this.setState({title: new_title})}
                        editInput={(new_title) => this.setState({title: new_title})}
                    />
                    <EditInput 
                        id={shortid.generate()} 
                        label={"Description"}
                        value={this.state.description}
                        placeholder={"Insert the description"}
                        saveInput={(desc) => this.setState({description: desc})}
                        editInput={(desc) => this.setState({description: desc})}
                    />
                </div>
                <AddQuestions />
                <ul style={{listStyle: "decimal"}}>
                    {this.props.questions.map((question) => {
                        return (
                            <li key={question.id}>
                                <QuestionWidget
                                    id={question.id}
                                    description={question.description}
                                    answers={question.answers}
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