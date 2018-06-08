import React from 'react'
import PropTypes from 'prop-types'
import CompoundModalHeader from './compound_modal/CompoundModalHeader.js'
import CompoundModalSection from './compound_modal/CompoundModalSection.js'
import CompoundModalFooter from './compound_modal/CompoundModalFooter.js'
import { compoundQuestionnaire } from '../../../actions'
import { connect } from 'react-redux';


class CompoundModal extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      _key: props._key,
      id: props.id,
      title: props.title,
      questionnaires: props.questionnaires,
      selected_questionnaires: [],
      is_loading: false
    }

  }

  componentWillReceiveProps(nextProps) {
      this.setState({
          questionnaires: nextProps.questionnaires
      })
    }

  hideModal() {
    this.props.hideModal()
  }

  handleCompound(e) {
    this.setState({is_loading: true})

    let questionnaires_to_be_composed = []

    questionnaires_to_be_composed.push(this.props.questionnaires[this.state._key])

    this.state.selected_questionnaires.forEach((key, index) => {
      questionnaires_to_be_composed.push(this.props.questionnaires[key])
    })

    this.props.compoundQuestionnaire(questionnaires_to_be_composed)
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
                questionnaires={this.state.questionnaires}
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

const mapStateToProps = (state) => {
  return { questionnaires: state.questionnaire.data }
}

const mapDispatchToProps = (dispatch) => ({
    compoundQuestionnaire: (questionnaires) => {
        dispatch(compoundQuestionnaire(questionnaires))
    },
})

CompoundModal.propTypes = {
  _key: PropTypes.string,
  id: PropTypes.integer,
  title: PropTypes.string,
  questionnaires: PropTypes.array,
  selected_questionnaires: PropTypes.array,
  is_loading: PropTypes.bool,
  is_active: PropTypes.bool,
  hideModal: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(CompoundModal);