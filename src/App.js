import React, { Component } from 'react';
import Resultat from './components/Resultat';
import './App.css';
import Quiz from './components/Quiz'
// import Quiz2 from './components/Quiz2'
import NameForm from './components/NameForm.jsx'
import { Route, BrowserRouter, Switch } from 'react-router-dom';


const quizOne = {
  name: "Quiz 1",
  difficulty: "beginner",
  questions: {
    q1: {
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
    q2: {
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
  }
}

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
      quizOne: quizOne,
      quizOne2: quizOne2,
      goodAns: false,
      badAns: false,
      reponse1: 'secondary',
      reponse2: 'secondary',
      reponse3: 'secondary',
      reponse4: 'secondary',
      disabled: false,
      disabledNext: true,
      value: '',
      currentPoints: 0,
      nbGoodAns: 0,
      disabledPlay: true,
      buttonColor: "danger",
    }
    this.clearDisable = this.clearDisable.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
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
        [reponse]: "success",
        disabledNext: false,
        disabled: true,
        currentPoints: this.state.currentPoints + 1,
        nbGoodAns: this.state.nbGoodAns + 1
      })
    } else {
      this.setState({
        [reponse]: "danger",
        disabled: true,
        disabledNext: false,
      })
    }
  }

  clearDisable() {
    this.setState({
      reponse1: 'secondary',
      reponse2: 'secondary',
      reponse3: 'secondary',
      reponse4: 'secondary',
      disabled: false,
      disabledNext: true,
    })
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
                    btnClassGood={this.state.btnClassGood}
                    btnClassBad={this.state.btnClassBad}
                    btnClass1={this.state.reponse1}
                    btnClass2={this.state.reponse2}
                    btnClass4={this.state.reponse4}
                    btnClass3={this.state.reponse3}
                    goodAns={this.state.goodAns}
                    handleGoodAns={this.handleGoodAnswer}
                    badAns={this.state.badAns}
                    handleBadAns={this.handleBadAnswer}
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
                    btnClassGood={this.state.btnClassGood}
                    btnClassBad={this.state.btnClassBad}
                    btnClass={this.state.btnClass}
                    btnClass1={this.state.reponse1}
                    btnClass2={this.state.reponse2}
                    btnClass4={this.state.reponse4}
                    btnClass3={this.state.reponse3}
                    goodAns={this.state.goodAns}
                    handleGoodAns={this.handleGoodAnswer}
                    badAns={this.state.badAns}
                    handleBadAns={this.handleBadAnswer}
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
              getButtonColor={this.getButtonColor} 
              buttonColor={this.state.buttonColor}/>
              </Route>

            <Route path="/resultat"><Resultat points={this.state.currentPoints}
              value={this.state.value}
              nbGoodAns={this.state.nbGoodAns} /></Route>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
