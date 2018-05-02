import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <div className="container is-fullhd">
              <div className="notification welcome-message">
                <h2>
                    Welcome to MyQuestions
                </h2>
                <div className="column">
                    <Link 
                        to='/create' 
                        className="button is-success is-rounded is-medium"
                    >

                        Create questions
                    </Link>
                </div>
              </div>
            </div>
        </div>
    );
}

export default HomePage