import React, { Component } from 'react';
import Resultat from './components/Resultat';
import './App.css';
import Quiz from './components/Quiz'
import NameForm from './components/NameForm.jsx'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AccueilAdmin from './components/AccueilAdmin';
import ModifyQuiz from './components/ModifyQuiz'
import AddQuiz from './components/AddQuiz'
import DeleteQuiz from './components/DeleteQuiz'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizOne3: [],
      reponse1Click: false,
      reponse2Click: false,
      reponse3Click: false,
      reponse4Click: false,
      disabled: false,
      disabledNext: true,
      disabledPlay : true,
      value: '', //Nom du joueur ou de l'équipe
      currentPoints: 0, //Score dynamique du joueur
      messageResult: "Bravo !",
      nbGoodAns: 0,   //Nombre de bonnes réponses au quiz
      buttonColor: "danger",
      nbQuestions: 0,//Nombre de questions total du quiz
      bestPlayersTab : [{name : 'Chuck Norris', score : 9999999}, {name : 'Julien', score : 150}] //Tableau de l'historique des joueurs et scores
    }
    this.clearDisable = this.clearDisable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.messageDyn = this.messageDyn.bind(this);
    this.registerFinalScore = this.registerFinalScore.bind(this);
    this.clearNbQuestions = this.clearNbQuestions.bind(this);
    this.refreshFetch = this.refreshFetch.bind(this);

  }

  componentDidMount() {
    fetch("http://92.175.11.66:3000/teamburgers/api/questions")
      .then(response => response.json())
      .then(quizz => {
        this.setState({
          quizOne3: quizz,
          nbQuestions: quizz.length
        });
      });
  }
  refreshFetch(){
    fetch("http://92.175.11.66:3000/teamburgers/api/questions")
      .then(response => response.json())
      .then(quizz => {
        this.setState({
          quizOne3: quizz,
          nbQuestions: quizz.length
        });
      });
  }

  messageDyn() {
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
        disabledPlay: false,
        buttonColor: "success"
      });
    }
    else {
      this.setState({
        disabledPlay: true,
        buttonColor: "danger"
      });
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
            {this.state.quizOne3.map((question, index) => {
              let pathquiz = `/quiz${index}`;
              let pathQuiz2 = `/quiz${index + 1}`;
              let returnHome = `/resultat`;
              if (index + 1 >= this.state.quizOne3.length) {
                return (

                  <Route path={pathquiz} key={question.id} >
                    <Quiz
                     questionNumber = {index + 1}
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
                      points={this.state.currentPoints} />
                  </Route>)
              } else {
                return (

                  <Route path={pathquiz} key={question.id} >
                    <Quiz
                        questionNumber = {index + 1}
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
                      value={this.state.value} />
                  </Route>)
              }
            })}

            <Route exact path="/">
              <NameForm
                type="text"
                value={this.state.value}
                bestPlayersTab = {this.state.bestPlayersTab}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                disabledPlay={this.state.disabledPlay}
                buttonColor={this.state.buttonColor}/>
            </Route>


            <Route path="/resultat">
              <Resultat 
                clearNbQuestions = {this.clearNbQuestions}
                nbQuestions = {this.state.nbQuestions}
                messageDyn = {this.messageDyn}
                bestPlayersTab = {this.state.bestPlayersTab}
                registerFinalScore = {this.registerFinalScore}
                messageResult = {this.state.messageResult}
                points={this.state.currentPoints}
                value={this.state.value}
                nbGoodAns={this.state.nbGoodAns}/>
            </Route>


            <Route path="/admin"><AccueilAdmin /></Route>

            <Route path="/modify">
              <ModifyQuiz 
                quizList={this.state.quizOne3}
                refreshFetch={this.refreshFetch}/>
            </Route>

            <Route path="/add">
            <AddQuiz
             refreshFetch={this.refreshFetch} />
            </Route>

            <Route path="/delete">
              <DeleteQuiz 
                data={this.state.quizOne3} 
                refreshFetch={this.refreshFetch}/>
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;