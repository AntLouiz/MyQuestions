import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import EditInput from '../models/EditInput.js'
  
const Header = (props) => {
  return (
            <div className={props.className}>
              <EditInput value={props.title}/>
            </div> 
  );
}

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  editTitle: PropTypes.func,
  editDescription: PropTypes.func,
  addQuestion: PropTypes.func
}

export default Header