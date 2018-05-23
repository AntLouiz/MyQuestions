import React from 'react'
import Questionnaries from '../components/models/Questionnaries.js'

class ListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Questionnaries search_actives={true} />
        )
    }
}

export default ListPage