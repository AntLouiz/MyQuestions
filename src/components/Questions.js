import React from 'react'
import QuestionInput from './questions/QuestionInput.js'


class Questions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: []
        }
    }

    render() {
        return (
            <div>
                <h2>Make a new question:</h2>

                <ul>
                    <li>
                        <QuestionInput />
                    </li>
                </ul>
            </div>
        );
    }
}


export default Questions