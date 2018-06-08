import React from 'react'
import PropTypes from 'prop-types'

class CompoundModalFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loading: props.is_loading
    }
  }

  componentWillReceiveProps(nextProps) {
       this.setState({
          is_loading: nextProps.is_loading
      })
  }

  handleCompound() {
    if(this.props.button_compound_enable){
      this.props.handleCompound()
    }
  }

  render() {
    return(
      <footer className="modal-card-foot">
        <a onClick={this.props.hideModal} className="button">
           Cancel
        </a>
        <a 
          onClick={this.handleCompound.bind(this)}
          className={`button is-info ${this.state.is_loading ? 'is-loading' : ''}`}
          disabled={this.props.button_compound_enable ? false : true}
        >
          Compound
        </a>
      </footer>
    );
  }
}

CompoundModalFooter.propTypes = {
  is_loading: PropTypes.bool,
  button_compound_enable: PropTypes.bool,
  handleCompound: PropTypes.func,
  hideModal: PropTypes.func
}

export default CompoundModalFooter