import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTextOption } from '../../actions/options.js'

class SideMenuOptions extends React.Component {

    constructor(props) {
        super(props);
        this.addTextOption = this.addTextOption.bind(this)
    }

    addTextOption() {
      this.props.addTextOption(this.props.questionnaire_key)
    }

    render() {
        return (
            <aside class="menu column is-4">
              <p class="menu-label">
                Options
              </p>
              <ul class="menu-list">
                <li><a class="button">Add multi answers</a></li>
                <li><a class="button">Add yes/no question</a></li>
                <li>
                  <a 
                    onClick={this.addTextOption} 
                    class="button">Add text
                  </a>
                </li>
                <li><a class="button">Add start message</a></li>
                <li><a class="button">Add end message</a></li>
              </ul>
              <p class="menu-label">
                Settings
              </p>
              <ul class="menu-list">
                <li>
                  <a>Manage Students</a>
                  <ul>
                    <li><a>Students</a></li>
                    <li><a>Add a member</a></li>
                  </ul>
                </li>
                <li><a>Permissions</a></li>
              </ul>
            </aside>
        );
    }
}

SideMenuOptions.propTypes = {
  questionnaire_key: PropTypes.string.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  addTextOption: (questionnaire_key) => {
    dispatch(addTextOption(questionnaire_key))
  }
})

export default connect(null, mapDispatchToProps)(SideMenuOptions);