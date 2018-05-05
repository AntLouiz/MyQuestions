import React from 'react'
import EditInput from '../models/EditInput.js'
import shortid from 'shortid'

class QuestionWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            description: props.description,
            answers: props.answers
        }
    }

    render() {
        let style = {
            width: "40rem",
            margin: "2rem",
            fontSize: "2rem"
        }
        return (
            <div style={style} >
                <EditInput 
                    id={shortid.generate()} 
                    value={this.state.description}
                    saveInput={(new_desc) => this.setState({description: new_desc})}
                />
            </div>
        );
    }
}


export default QuestionWidget