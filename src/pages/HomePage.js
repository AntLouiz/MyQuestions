import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <div className="container is-fullhd">
              <div className="notification welcome-message">
                <h3>
                   Create awesome questionnaries for your researches!
                </h3>
                <div className="column">
                    <Link 
                        to='/create/questionnaries' 
                        className="button is-success is-rounded is-medium"
                    >

                        Start now
                    </Link>
                </div>
              </div>
            </div>
        </div>
    );
}

export default HomePage