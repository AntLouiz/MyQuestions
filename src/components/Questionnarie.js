import React from 'react'
import QuestionWidget from './questions/QuestionWidget.js'
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