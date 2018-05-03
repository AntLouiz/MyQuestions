import React from 'react'

class EditInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleKeyPress(e) {
        if (e.key == 'Enter') {
            let input = document.getElementById(this.props.id);

            if(input.value){
                // this.props.editOption({"id": input.id, "name": input.value});
                console.log(input.value);
            }
        }
    }

    handleFocusOut(e) {
        let input = document.getElementById(this.props.id);
        
        if(input.value){
            // this.props.editOption({"id": input.id, "name": input.value});
            console.log(input.value);
        }
    }

    removeItself() {
        // this.props.removeOption(this.props.data);
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
                        <button className="btn--link" onClick={this.removeItself.bind(this)}>
                            remove
                        </button>
                    </span>
                </li>
            </div>
        );
    }
}


export default EditInput;