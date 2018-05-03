import React from 'react'
import QuestionInput from './questions/QuestionInput.js'
import shortid from 'shortid'


class Questionnarie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: []
        }
    }

    render() {
        return (
            <div>
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


export default Questions