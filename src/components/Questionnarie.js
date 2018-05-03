import React from 'react'
import QuestionWidget from './questionnarie/QuestionWidget.js'
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
                <h1>{!!this.state.title ? this.state.title : "Unknown"}</h1>
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