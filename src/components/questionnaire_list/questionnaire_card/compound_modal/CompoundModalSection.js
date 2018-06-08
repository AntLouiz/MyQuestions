import React from 'react';
import PropTypes from 'prop-types'
import { connect, dispatch } from 'react-redux';

class CompoundModalSection extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      _key: props._key,
      is_loading: props.is_loading,
      questionnaires: props.questionnaires,
    }
  }

  componentWillReceiveProps(nextProps) {
       this.setState({
          questionnaires: nextProps.questionnaires,
          is_loading: nextProps.is_loading
      })
  }

  render() {
    return (
      <section className="modal-card-body">
        <Choose>
          <When condition={this.state.is_loading}>
            Loading...
          </When>
          <Otherwise>
            <ul>
              {Object.keys(this.state.questionnaires).map((key) => {
                let id = this.state.questionnaires[key].id;
                let title = this.state.questionnaires[key].title;
                let is_active = this.state.questionnaires[key].is_active;

                if(key !== this.state._key){
                  return (
                    <li key={key}>
                      <label className="checkbox">
                        <input 
                          type="checkbox"
                          name={key} 
                          value={key}
                          onChange={this.props.handleCheckbox}
                        />
                      {title}
                      </label>
                    </li>
                  );
                }
              })}
            </ul>
          </Otherwise>
        </Choose>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        questionnaires: state.questionnaire.data
    }
}

CompoundModalSection.propTypes = {
  _key: PropTypes.string,
  is_loading: PropTypes.bool,
  questionnaires: PropTypes.array,
  handleCheckbox: PropTypes.func
}

export default connect(mapStateToProps, null)(CompoundModalSection)