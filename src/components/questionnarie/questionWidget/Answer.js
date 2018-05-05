import React from 'react'
import EditInput from '../../models/EditInput.js'
import shortid from 'shortid'

class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            description: props.description,
            value: props.value
        }
    }

    render() {
        return (
            <div>
                <EditInput 
                    id={shortid.generate()} 
                    value={this.state.description}
                    saveInput={(new_desc) => this.setState({description: new_desc})}
                />
            </div>
        );
    }
}


export default Answer