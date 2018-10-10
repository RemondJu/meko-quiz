import React, { Component } from 'react';
import './App.css';
import Quiz from './components/Quiz'
import { Route, BrowserRouter, Switch } from 'react-router-dom';


const quizOne = {
  name: "Quiz 1",
  difficulty: "beginner",
  questions: {
    q1: {
      question: "À quel écrivain attribue-t-on la rédaction de l’Illiade et l’Odyssée ?",
      reponse1: {
        reponse: "Homère",
        status: true
      },
      reponse2: {
        reponse: "Virgile",
        status: false
      },    
      reponse3: {
        reponse: "Euripide",
        status: false
      },
      reponse4: {
        reponse: "Sophocle",
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
      btnClassGood: 'secondary'
     }
     this.handleGoodAnswer = this.handleGoodAnswer.bind(this)
     this.handleBadAnswer = this.handleBadAnswer.bind(this)
  }

  handleGoodAnswer() {
    this.setState({
      goodAns: true,
      btnClassGood: 'success'
    })
  }

  handleBadAnswer() {
    this.setState({
      badAns: true,
      btnClassBad: 'danger',
      btnClassGood: 'success'
    })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>               
            <Switch>
              <Route path="/quiz"><Quiz 
                btnClassGood={this.state.btnClassGood}
                btnClassBad={this.state.btnClassBad}
                goodAns={this.state.goodAns}
                handleGoodAns={this.handleGoodAnswer}
                badAns={this.state.badAns}
                handleBadAns={this.handleBadAnswer}
                quizOne={this.state.quizOne}/></Route>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
