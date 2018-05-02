import React from 'react'


class Questions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: []
        }
    }

    render() {
        return (
            <div>
                <h2>Make a new question:</h2>

                <ul>
                    <li>
                        1. <input type="text" /> ?
                    </li>
                </ul>
            </div>
        );
    }
}


export default Questions