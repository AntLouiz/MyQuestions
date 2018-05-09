import React from 'react'
import AutosizeInput from 'react-input-autosize';

class EditInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: `edit-input-${props.id}`,
            value: props.value,
            type: props.type
        }
    }

    handleKeyPress(e) {
        if (e.key == 'Enter') {
            this.handleSave()
        }
    }

    handleEdit(e) {
        let new_value = e.target.value;
        this.setState((prev) => {value: new_value})
        this.props.editInput(e.target.value);
    }

    handleSave(e) {
        let new_value = e.target.value;
        this.props.saveInput(new_value);
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

        let style = {
            border: "none",
            background: "#f7f7f7",
            color: "#696868"
        }

        return (
            <div>
                    <Label />
                    <AutosizeInput
                        id={this.state.id}
                        value={this.props.value}
                        onChange={this.handleEdit.bind(this)}
                        onBlur={this.handleSave.bind(this)}
                        placeholder={this.props.placeholder}
                        style={style}
                        type={!!this.state.type ? this.state.type : 'text'}
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