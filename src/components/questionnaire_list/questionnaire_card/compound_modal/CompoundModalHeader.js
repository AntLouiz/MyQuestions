import React from 'react'
import PropTypes from 'prop-types'

const CompoundModalHeader = (props) => {
    return (
        <header className="modal-card-head">
          <p className="modal-card-title">
            Compound questionnaires with the
            <p>
              {props.title}
            </p>
          </p>
        </header>
    );
}

CompoundModalHeader.propTypes = {
  title: PropTypes.string
}


export default CompoundModalHeader