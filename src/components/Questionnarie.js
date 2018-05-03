import React from 'react'
import QuestionWidget from './questionnarie/QuestionWidget.js'
import EditInput from './models/EditInput.js'
import shortid from 'shortid'


class Questionnarie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: [],
            title: undefined,
            description: undefined
        }
    }

    render() {
        return (
            <div>
                <span>
                    <EditInput 
                        id={shortid.generate()} 
                        label={"Title"}
                        value={"Unknown"}
                        saveInput={(new_title) => this.setState({title: new_title})}
                    />
                </span>
                <ul>
                    {this.state.questions.map((question) => {
                        return (
                            <li>
                                {question}
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}


export default Questionnarie