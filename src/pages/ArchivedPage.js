import React from 'react'
import QuestionnaireList from '../components/QuestionnaireList.js'

class ArchivedPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <QuestionnaireList search_actives={false} />
    }
}

export default ArchivedPage;