import React from 'react'
import { Link } from 'react-router-dom'

class QuestionnaireCard extends React.Component {
    render() {
        return (
            <div className="column is-12">
                <div className="card">
                    <Choose>
                        <When condition={this.props.is_active}>
                            <Link className="" to={`/questionnaire/detail/${this.props._key}/${this.props.id}`}>
                                <header className="card-header has-background-info">
                                    <p className="card-header-title">
                                        {this.props.title}
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
                        </When>
                        <Otherwise>
                            <header className="card-header has-background-info">
                                <p className="card-header-title">
                                    {this.props.title}
                                </p>
                            </header>
                            <footer className="card-footer">
                                <a href="/" className="card-footer-item">
                                    Restore
                                </a>
                            </footer>
                        </Otherwise>
                    </Choose>
                </div>
            </div>
        );
    }
}

export default QuestionnaireCard;