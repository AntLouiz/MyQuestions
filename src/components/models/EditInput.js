import React from 'react'

class EditInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: `edit-input-${props.id}`,
            value: props.value
        }
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
        const Label = () => {
            if(this.props.label){
                return (
                    <label to={this.props.id} style={{paddingRight: "1rem"}}> 
                        {this.props.label}:
                    </label>
                );
            }
            else
                return <label></label>;
        }

        return (
            <div>
                    <Label />
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


EditInput.defaultProps = {
    label: undefined,
    value: undefined
}

export default EditInput;