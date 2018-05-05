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
        let label = () => {
            if(this.props.label){
                return (
                    <label to={this.props.id} style={{paddingRight: "1rem"}}> 
                        {this.props.label}:
                    </label>
                );
            }
            else
                return undefined;
        }

        return (
            <div>
                    {label}
                    <input
                        id={this.props.id}
                        style={{border: "none"}}
                        defaultValue={this.props.value} 
                        onKeyPress={this.handleKeyPress.bind(this)}
                        onBlur={this.handleFocusOut.bind(this)}
                    />
            </div>
        );
    }
}


export default EditInput;