import React from 'react'
import QuestionnaireList from '../components/QuestionnaireList.js'

class ListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <QuestionnaireList search_actives={true} />
        )
    }
}

export default ListPage