import React from 'react'


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


export default CompoundModalHeader