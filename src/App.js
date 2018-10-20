import React, { Component } from 'react';
import Resultat from './components/Resultat';
import './App.css';
import Quiz from './components/Quiz'
// import Quiz2 from './components/Quiz2'
import NameForm from './components/NameForm.jsx'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AccueilAdmin from './components/AccueilAdmin';
import ModifyQuiz from './components/ModifyQuiz'
import AddQuiz from './components/AddQuiz'
import DeleteQuiz from './components/DeleteQuiz'

const quizOne2 = {
  name: "Quiz 1",
  difficulty: "beginner",
  questions: [
    {
      id: 1,
      question: "What was Victoria Beckham's nickname when she was in the Spice Girls",
      reponse1: {
        reponse: "Posh",
        status: true
      },
      reponse2: {
        reponse: "Sporty",
        status: false
      },
      reponse3: {
        reponse: "Ginger",
        status: false
      },
      reponse4: {
        reponse: "Baby",
        status: false
      }
    },
    {
      id: 2,
      question: "What was JK Rowling's job before she wrote Harry Potter ?",
      reponse1: {
        reponse: "Lawyer",
        status: false
      },
      reponse2: {
        reponse: "Shop assistant",
        status: false
      },
      reponse3: {
        reponse: "English teacher",
        status: true
      },
      reponse4: {
        reponse: "Accountant",
        status: false
      }
    }
  ]
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizOne2: quizOne2,
      reponse1Click: false,
      reponse2Click: false,
      reponse3Click: false,
      reponse4Click: false,
      disabled: false,
      disabledNext: true,
      disabledPlay : true,
      value: 'Player',
      messageResult: "Bravo !",
      currentPoints: 0,   
      nbGoodAns: 0,   
      buttonColor: "danger",
      nbQuestions: quizOne2.questions.length,

    }
    this.clearDisable = this.clearDisable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.messageDyn = this.messageDyn.bind(this);
    this.clearNbQuestions = this.clearNbQuestions.bind(this);

  }

  messageDyn(){
    if (this.state.nbGoodAns >= this.state.nbQuestions / 2) {
      this.setState({
        messageResult: "Bravo !"
      })
    } else {
      this.setState({
        messageResult: "Bof..."
      })
    }
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    if (event.target.value.length > 2) {
      this.setState({ 
        disabledPlay : false, 
        buttonColor: "success"});
    }
    else {
      this.setState({ 
        disabledPlay : true, 
        buttonColor: "danger"});
    }
  }

  handleAnswer(answerStatus, reponse) {
    if (answerStatus) {
      this.setState({
        disabledNext: false,
        disabled: true,
        currentPoints: this.state.currentPoints + 50,
        nbGoodAns: this.state.nbGoodAns + 1
      })
    } else {
      this.setState({
       [reponse]: true,
        disabled: true,
        disabledNext: false,
      })
    }
  }

  clearDisable() {
    this.setState({
      reponse1Click: false,
      reponse2Click: false,
      reponse3Click: false,
      reponse4Click: false,
      disabled: false,
      disabledNext: true,
    })
  }

  clearNbQuestions() {
    this.setState({
      nbGoodAns: 0
    });
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>

            {this.state.quizOne2.questions.map(question => {
              let pathquiz = `/quiz${question.id}`
              let pathQuiz2 = `/quiz${question.id + 1}`
              let returnHome = `/resultat`
              if (question.id + 1 > this.state.quizOne2.questions.length) {
                return (

                  <Route path={pathquiz}><Quiz
                    key={question.id}
                    disabled={this.state.disabled}
                    disabledNext={this.state.disabledNext}
                    btnClick1={this.state.reponse1Click}
                    btnClick2={this.state.reponse2Click}
                    btnClick4={this.state.reponse4Click}
                    btnClick3={this.state.reponse3Click}
                    clearDisable={this.clearDisable}
                    handleAns={this.handleAnswer}
                    q={question}
                    pathquiz={returnHome}
                    value={this.state.value}
                    points={this.state.currentPoints} /></Route>)
              } else {
                return (

                  <Route path={pathquiz}><Quiz
                    key={question.id}
                    disabled={this.state.disabled}
                    disabledNext={this.state.disabledNext}
                    btnClick1={this.state.reponse1Click}
                    btnClick2={this.state.reponse2Click}
                    btnClick4={this.state.reponse4Click}
                    btnClick3={this.state.reponse3Click}
                    clearDisable={this.clearDisable}
                    handleAns={this.handleAnswer}
                    q={question}
                    pathquiz={pathQuiz2}
                    points={this.state.currentPoints}
                    value={this.state.value} /></Route>)
              }
            })}

            <Route exact path="/"><NameForm
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              disabledPlay={this.state.disabledPlay}
              buttonColor={this.state.buttonColor}/>
              </Route>


            <Route path="/resultat"><Resultat 
            clearNbQuestions = {this.clearNbQuestions}
            nbQuestions = {this.state.nbQuestions}
            messageDyn = {this.messageDyn}
            messageResult = {this.state.messageResult}
            points={this.state.currentPoints}
            value={this.state.value}
            nbGoodAns={this.state.nbGoodAns}/></Route>


            <Route path="/admin"><AccueilAdmin /></Route>
            <Route path="/modify"><ModifyQuiz /></Route>
            <Route path="/add"><AddQuiz /></Route>
            <Route path="/delete"><DeleteQuiz /></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
