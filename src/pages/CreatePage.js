import React from 'react'
import shortid from 'shortid'
import Questionnarie from '../components/Questionnarie.js'

const CreatePage = () => {
    const empty_questionnarie = {
        id: shortid.generate(),
        title: undefined,
        description: undefined,
        questions: []
    }
    return (
        <div>
            <h2>
                Create Questions
            </h2>
            <div className="container">
                <Questionnarie
                    id={empty_questionnarie.id}
                    title={empty_questionnarie.title}
                    description={empty_questionnarie.description}
                    questions={empty_questionnarie.questions}
                />
            </div>
        </div>
    );
}

export default CreatePage