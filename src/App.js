import React, { Component } from 'react';
import Resultat from './components/Resultat';
import './App.css';
import Quiz from './components/Quiz'
import NameForm from './components/NameForm.jsx'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import AccueilAdmin from './components/AccueilAdmin';
import ModifyQuiz from './components/ModifyQuiz';
import AddQuiz from './components/AddQuiz';
import DeleteQuiz from './components/DeleteQuiz';


// const quizOne3 =  [
//     {
//       id: 1,
//       name: 'Quiz 1',
//       difficulty: 'beginner',
//       question: "What was Victoria Beckham's nickname when she was in the Spice Girls",
//       reponse1: "Posh",
//       status1: true,
//       reponse2: "Sporty",
//       status2: false,
//       reponse3: "Ginger",
//       status3: false,
//       reponse4: "Baby",
//       status4: false,
//     },
//   ]

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
      disabledPlay: true,
      value: '',
      messageResult: "Bravo !",
      currentPoints: 0,
      nbGoodAns: 0,
      buttonColor: "danger",
      nbQuestions: 0,

    }
    this.clearDisable = this.clearDisable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.messageDyn = this.messageDyn.bind(this);
    this.clearNbQuestions = this.clearNbQuestions.bind(this);

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

  handleChange(event) {
    this.setState({ value: event.target.value });
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
              let pathquiz = `/quiz${index}`
              let pathQuiz2 = `/quiz${index + 1}`
              let returnHome = `/resultat`

              if (question.id + 1 > this.state.quizOne3.length) {
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
              buttonColor={this.state.buttonColor} />
            </Route>

            <Route path="/resultat"><Resultat
              clearNbQuestions={this.clearNbQuestions}
              nbQuestions={this.state.nbQuestions}
              messageDyn={this.messageDyn}
              messageResult={this.state.messageResult}
              points={this.state.currentPoints}
              value={this.state.value}
              nbGoodAns={this.state.nbGoodAns} /></Route>

            <Route path="/admin"><AccueilAdmin /></Route>

            <Route path="/modify"><ModifyQuiz /></Route>

            <Route path="/add"><AddQuiz /></Route>

            <Route path="/delete"><DeleteQuiz 
              data={this.state.quizOne3} /></Route>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;