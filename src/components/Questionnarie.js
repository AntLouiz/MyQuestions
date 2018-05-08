import React from 'react'
import QuestionWidget from './questionnarie/QuestionWidget.js'
import EditInput from './models/EditInput.js'
import shortid from 'shortid'
import AddQuestions from '../containers/AddQuestions.js'


class Questionnarie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: [{
                id: shortid.generate(),
                description: "One question",
                answers: [
                    {
                        id: shortid.generate(),
                        description: "Sim",
                        type: 'radio'
                    },
                    {
                        id: shortid.generate(),
                        description: "Nao",
                        type: 'radio'
                    }
                ]}],
            title: undefined,
            description: undefined
        }
    }

    addQuestion() {
        var new_empty_question = {
                id: shortid.generate(),
                description: undefined,
                answers: []
            }
        this.setState(prev => this.state.questions.push(new_empty_question));
    }

    removeQuestion(question_target) {

        this.setState({questions: this.state.questions.filter((question)=>{
            return question.id !== question_target.id 
        })});
    }

    saveQuestionDescription(new_question) {
        this.setState({questions: this.state.questions.filter((question)=>{
            if (question.id === new_question.id){
                question.description = new_question.description;
            }

            return question;
        })});
    }

    addAnswer(new_answer){
        this.setState({questions: this.state.questions.filter((question)=>{
                if (question.id === new_answer.question_id){
                        question.answers.push(new_answer);
                }
                return question;
            })});  
    }


    removeAnswer(answer_target){
        this.setState({questions: this.state.questions.filter((question)=>{
                if(question.id === answer_target.question_id){
                    question.answers = question.answers.filter((answer) => {
                        console.log(answer.id, answer_target.id);
                        return answer.id !== answer_target.id;
                    })
                }
            return question; 
        })});
    }

    saveAnswer(new_answer){
        this.setState(() => {
            return {questions: this.state.questions.filter((question)=>{
                if (question.id === new_answer.question_id){
                    question.answers.filter((answer) => {
                        if(answer.id === new_answer.id){
                            answer.description = new_answer.description;
                        }
                        return answer;
                    });
                }

                return question;
            })}
        }); 
    }

    render() {
        return (
            <div>
                <div style={{fontSize: "2.5rem", marginLeft: "5rem"}}>
                    <EditInput 
                        id={shortid.generate()} 
                        label={"Title"}
                        value={this.state.title}
                        placeholder={"Insert the title"}
                        saveInput={(new_title) => this.setState({title: new_title})}
                        editInput={(new_title) => this.setState({title: new_title})}
                    />
                    <EditInput 
                        id={shortid.generate()} 
                        label={"Description"}
                        value={this.state.description}
                        placeholder={"Insert the description"}
                        saveInput={(desc) => this.setState({description: desc})}
                        editInput={(desc) => this.setState({description: desc})}
                    />
                </div>
                <AddQuestions />
                <ul style={{listStyle: "decimal"}}>
                    {this.state.questions.map((question) => {
                        return (
                            <li key={question.id}>
                                <QuestionWidget
                                    id={question.id}
                                    description={question.description}
                                    answers={question.answers}
                                    saveQuestionDescription={this.saveQuestionDescription.bind(this)}
                                    removeQuestion={this.removeQuestion.bind(this)}
                                    addAnswer={this.addAnswer.bind(this)}
                                    saveAnswer={this.saveAnswer.bind(this)}
                                    removeAnswer={this.removeAnswer.bind(this)}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}


export default Questionnarie