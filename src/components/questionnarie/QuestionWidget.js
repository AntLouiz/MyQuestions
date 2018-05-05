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
        let style = {
            border: "solid #46caa8",
            width: "40rem",
            margin: "2rem",
            fontSize: "2rem"
        }
        return (
            <div style={style} >
                {this.state.description}
            </div>
        );
    }
}


export default QuestionWidget