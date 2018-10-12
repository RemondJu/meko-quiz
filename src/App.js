import React, { Component } from 'react';
import Resultat from './Resultat';
import './App.css';
import Quiz from './components/Quiz'
import Quiz2 from './components/Quiz2'
import NameForm from './components/NameForm.jsx'
import PlayerUI from './components/PlayerUI.jsx'
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
      question: "What wa JK Rowling's job before she wrote Harry Potter ?",
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizOne: quizOne,
      goodAns: false,
      badAns: false,
      btnClassBad: 'secondary',
      btnClassGood: 'secondary',
      disabled: false,
      disabledNext: true,
      value: ''
    }
    this.handleGoodAnswer = this.handleGoodAnswer.bind(this)
    this.handleBadAnswer = this.handleBadAnswer.bind(this)
    this.clearDisable = this.clearDisable.bind(this)
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleGoodAnswer() {
    this.setState({
      goodAns: true,
      btnClassGood: 'success',
      disabled: true,
      disabledNext: false
    })
  }

  handleBadAnswer() {
    this.setState({
      badAns: true,
      btnClassBad: 'danger',
      btnClassGood: 'success',
      disabled: true,
      disabledNext: false
    })
  }
  clearDisable() {
    this.setState({
      btnClassBad: 'secondary',
      btnClassGood: 'secondary',
      disabled: false,
      disabledNext: true,
    })
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>

            <Route path="/quiz"><Quiz
              disabled={this.state.disabled}
              disabledNext={this.state.disabledNext}
              btnClassGood={this.state.btnClassGood}
              btnClassBad={this.state.btnClassBad}
              goodAns={this.state.goodAns}
              handleGoodAns={this.handleGoodAnswer}
              badAns={this.state.badAns}
              handleBadAns={this.handleBadAnswer}
              quizOne={this.state.quizOne.questions}
              clearDisable={this.clearDisable}
              q={this.state.quizOne.questions.q1} /></Route>


            <Route path="/quiz2"><Quiz2
              disabled={this.state.disabled}
              disabledNext={this.state.disabledNext}
              btnClassGood={this.state.btnClassGood}
              btnClassBad={this.state.btnClassBad}
              goodAns={this.state.goodAns}
              handleGoodAns={this.handleGoodAnswer}
              badAns={this.state.badAns}
              handleBadAns={this.handleBadAnswer}
              quizOne={this.state.quizOne.questions}
              q={this.state.quizOne.questions.q2} /></Route>

            <Route exact path="/"><NameForm 
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange} /></Route>


            <Route path="/lets-play"><PlayerUI 
            value={this.state.value} /></Route>

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
