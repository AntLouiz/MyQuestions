import React from 'react'

class QuestionWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            description: props.description,
            aswers: props.aswers
        }
    }

    render() {
        return (
            <div>
                {this.state.description}
            </div>
        );
    }
}


export default QuestionWidget