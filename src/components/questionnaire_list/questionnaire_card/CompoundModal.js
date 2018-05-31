import React from 'react'
import CompoundModalHeader from './compound_modal/CompoundModalHeader.js'
import CompoundModalSection from './compound_modal/CompoundModalSection.js'
import CompoundModalFooter from './compound_modal/CompoundModalFooter.js'


class CompoundModal extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      _key: props._key,
      id: props.id,
      title: props.title,
      selected_questionnaires: [],
      is_loading: false
    }

  }

  hideModal() {
    this.props.hideModal()
  }

  handleCompound(e) {
    this.setState({is_loading: true})
  }

  handleCheckbox(e) {
    let checkbox = e.target;
    if(checkbox.checked)
      this.setState((prev) => this.state.selected_questionnaires.push(checkbox.value))
    else{
      this.setState((prev) => (
        {selected_questionnaires: this.state.selected_questionnaires.filter((questionnaire) => {
          return questionnaire !== checkbox.value
        })}
      ))
    }
  }

  render() {
    return (
      <div className={`modal ${this.props.is_active ? 'is-active': ''}`}>
        <div className="modal-background"></div>
          <div className="modal-content">
            <div className="modal-card">
              <CompoundModalHeader title={this.state.title} />
              <CompoundModalSection 
                _key={this.state._key}
                is_loading={this.state.is_loading}
                handleCheckbox={this.handleCheckbox.bind(this)}
              />
              <CompoundModalFooter
                is_loading={this.state.is_loading}
                hideModal={this.hideModal.bind(this)}
                handleCompound={this.handleCompound.bind(this)}
                button_compound_enable={this.state.selected_questionnaires.length ? true : false}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default CompoundModal;