import React from 'react'
import shortid from 'shortid'
import Questionnarie from '../components/Questionnarie.js'

const CreatePage = () => {
    const empty_questionnarie = {
        id: shortid.generate(),
        title: null,
        description: null,
        questions: []
    }
    return (
        <div>
            <h2>
                Create Questions
            </h2>
            <div className="container">
                <div class="modal is-active">
                <div class="modal-background"></div>
                    <div class="modal-content">
                          <div class="modal-card">
                            <header class="modal-card-head">
                              <p class="modal-card-title">Create a new questionnarie</p>
                              <button class="delete" aria-label="close"></button>
                            </header>
                            <section class="modal-card-body">
                              <div>
                                <label to="input_title">
                                    <h2>Title:</h2>
                                </label>
                                <input 
                                    className="input is-primary" 
                                    name="input_title" 
                                    type="text" 
                                />
                              </div>
                            </section>
                            <footer class="modal-card-foot">
                              <button class="button is-success">Create</button>
                              <button class="button">Cancel</button>
                            </footer>
                          </div>
                    </div>
                <button class="modal-close"></button>
                </div>
            </div>
        </div>
    );
}

export default CreatePage