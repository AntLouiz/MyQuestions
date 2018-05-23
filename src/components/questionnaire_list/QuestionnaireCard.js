import React from 'react'
import { Link } from 'react-router-dom'

const QuestionnaireCard = (props) => {
    return (
        <div className="column is-12">
            <div className="card">
                <Link className="" to={`/questionnaire/detail/${props._key}/${props.id}`}>
                    <header className="card-header has-background-info">
                        <p className="card-header-title">
                            {props.title}
                        </p>
                    </header>
                </Link>
                <footer className="card-footer">
                    <a href="/" className="card-footer-item">
                        Compound
                    </a>
                    <a href="/" className="card-footer-item">
                        Archive
                    </a>
                </footer>
            </div>
        </div>
    );
}

export default QuestionnaireCard;