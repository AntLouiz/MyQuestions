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
                <h1><EditInput id={shortid.generate()} value={"Unknown"} /></h1>
                <h2><EditInput id={shortid.generate()} value={"Unknown"} /></h2>
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