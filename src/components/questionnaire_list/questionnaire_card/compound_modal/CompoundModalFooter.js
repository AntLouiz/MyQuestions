import React from 'react'

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

  render() {
    return(
      <footer className="modal-card-foot">
        <a onClick={this.props.hideModal} className="button">
           Cancel
        </a>
        <a 
          onClick={this.props.handleCompound}
          className={`button is-info ${this.state.is_loading ? 'is-loading' : ''}`}
          disabled={this.props.button_compound_enable ? false : true}
        >
          Compound
        </a>
      </footer>
    );
  }
}

export default CompoundModalFooter