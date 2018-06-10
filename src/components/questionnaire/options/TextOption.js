import React from 'react';
import PropTypes from 'prop-types';

const TextOption = (props) => {
  return (
    <div>
        <input type="text" placeholder="Text here" value={props.description} />
    </div>
  )
}

TextOption.propTypes = {
    description: PropTypes.string
}

export default TextOption;