import React from 'react'

class EditInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleKeyPress(e) {
        if (e.key == 'Enter') {
            this.handleSave()
        }
    }

    handleFocusOut(e) {
        this.handleSave()
    }

    handleSave() {
        let input = document.getElementById(this.props.id);
        
        if(input.value){
            this.props.saveInput(input.value);
        }
    }

    render() {
        return (
            <div>
                <li className="widget-option">
                    <input
                        id={this.props.id}
                        style={{border: "none"}}
                        defaultValue={this.props.value} 
                        onKeyPress={this.handleKeyPress.bind(this)}
                        onBlur={this.handleFocusOut.bind(this)}
                    />
                    <span>
                        <button className="btn--link" onClick={this.handleSave.bind(this)}>
                            Save
                        </button>
                    </span>
                </li>
            </div>
        );
    }
}


export default EditInput;