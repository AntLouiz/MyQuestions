import React from 'react'
import Questionnaries from '../components/models/Questionnaries.js'

class ArchivedPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Questionnaries search_actives={false} />
    }
}

export default ArchivedPage;