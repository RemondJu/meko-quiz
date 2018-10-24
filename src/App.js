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

const quizOne3 =  [
    {
      id: 1,
      name: 'Quiz 1',
      difficulty: 'beginner',
      question: "What was Victoria Beckham's nickname when she was in the Spice Girls",
      reponse1: "Posh",
      status1: true,
      reponse2: "Sporty",
      status2: false,
      reponse3: "Ginger",
      status3: false,
      reponse4: "Baby",
      status4: false,
    },
    {
      id: 2,
      name: 'Quiz 1',
      difficulty: 'beginner',
      question: "What was JK Rowling's job before she wrote Harry Potter ?",
      reponse1: "Lawyer",
      status1: false,
      reponse2: "Shop assistant",
      status2: false,
      reponse3: "English teacher",
      status3: true,
      reponse4: "Accountant",
      status4: false,
    }
  ]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizOne3: quizOne3,
      reponse1Click: false,
      reponse2Click: false,
      reponse3Click: false,
      reponse4Click: false,
      disabled: false,
      disabledNext: true,
      disabledPlay : true,
      value: 'Player', //Nom du joueur ou de l'équipe
      currentPoints: 0, //Score dynamique du joueur
      messageResult: "Bravo !",
      nbGoodAns: 0,   //Nombre de bonnes réponses au quiz
      buttonColor: "danger",
      nbQuestions: quizOne3.length,//Nombre de questions total du quiz
      bestPlayersTab : [] //Tableau de l'historique des joueurs et scores
    }
    this.clearDisable = this.clearDisable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.messageDyn = this.messageDyn.bind(this);
    this.registerFinalScore = this.registerFinalScore.bind(this);
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

  registerFinalScore() {
      const name = this.state.value;
      const score = this.state.currentPoints;
      const tab = [...this.state.bestPlayersTab];
      this.setState({
          bestPlayersTab : [...tab, {rang: '', name : name, score: score }]
      })
  }

  handleChange(event) {
    this.setState({ value: event.target.value, currentPoints : 0, nbGoodAns : 0, disabled: false, disabledNext : true });
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

            {this.state.quizOne3.map(question => {
              let pathquiz = `/quiz${question.id}`
              let pathQuiz2 = `/quiz${question.id + 1}`
              let returnHome = `/resultat`
              if (question.id + 1 > this.state.quizOne3.length) {
                return (

                  <Route path={pathquiz} key={question.id} ><Quiz
                    
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

                  <Route path={pathquiz} key={question.id} ><Quiz
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
              bestPlayersTab = {this.state.bestPlayersTab}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              disabledPlay={this.state.disabledPlay}
              buttonColor={this.state.buttonColor}/>
              </Route>


            <Route path="/resultat"><Resultat 
            clearNbQuestions = {this.clearNbQuestions}
            nbQuestions = {this.state.nbQuestions}
            messageDyn = {this.messageDyn}
            bestPlayersTab = {this.state.bestPlayersTab}
            registerFinalScore = {this.registerFinalScore}
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
