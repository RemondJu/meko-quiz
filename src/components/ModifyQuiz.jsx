import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Table, Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './AccueilAdmin.css';
import ValidationModal from './ValidationModal';


class ModifyQuiz extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 0,
			'name-quiz': '',
			'difficulty-quiz': '',
			question: '',
			'answer-1': '',
			'status-1': false,
			'answer-2': '',
			'status-2': false,
			'answer-3': '',
			'status-3': false,
			'answer-4': '',
			'status-4': false,
			modal: false,
			answer: "Votre question a bien été modifiée"
		}
		this.fillForm = this.fillForm.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.onChange = this.onChange.bind(this);
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	submitForm(event) {
        const post = {
            'name-quiz': this.state["name-quiz"],
            'difficulty-quiz': this.state["difficulty-quiz"],
            question: this.state.question,
            'answer-1': this.state["answer-1"],
            'status-1': this.state["status-1"],
            'answer-2': this.state["answer-2"],
            'status-2': this.state["status-2"],
            'answer-3': this.state["answer-3"],
            'status-3': this.state["status-3"],
            'answer-4': this.state["answer-4"],
            'status-4': this.state["status-4"],
        }
		const config = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(post),
		};
		const url = "http://92.175.11.66:3000/teamburgers/api/questions/" + this.state.id;
		event.preventDefault();
		fetch(url, config)
			.then(res => res.text())
			.then(this.toggle)
			.then(this.setState({
				'name-quiz': '',
				'difficulty-quiz': '',
				question: '',
				'answer-1': '',
				'status-1': false,
				'answer-2': '',
				'status-2': false,
				'answer-3': '',
				'status-3': false,
				'answer-4': '',
				'status-4': false,
			}))
			.then(this.props.refreshFetch)
			.catch(event => {
				console.error(event)
				console.log('Ca marche po...');
			})
	}

	fillForm(event) {
		fetch("http://92.175.11.66:3000/teamburgers/api/questions/" + event.target.id)
			.then(res => res.json())
			.then(data => {
				this.setState({
					id: data.id,
					'name-quiz': data['name-quiz'],
					'difficulty-quiz': data['difficulty-quiz'],
					question: data.question,
					'answer-1': data['answer-1'],
					'status-1': data['status-1'],
					'answer-2': data['answer-2'],
					'status-2': data['status-2'],
					'answer-3': data['answer-3'],
					'status-3': data['status-3'],
					'answer-4': data['answer-4'],
					'status-4': data['status-4'],
				})
			})
	}

	onChange(event) {
		if (event.target.name === 'status') {
			this.setState({
				'status-1': false,
				'status-2': false,
				'status-3': false,
				'status-4': false,
				[event.target.id]: true
			})
		} else {
			this.setState({
				[event.target.name]: event.target.value
			})
		}
	}

	render() {
		return (
			<div className="ModifyQuiz">
				<Container>
					<h1 className="adminTitle">Modification d'une question :</h1>
					<NavLink to="/admin" activeClassName="selected"><Button className="mb-4" color="primary" size="lg" block>Accueil Administrateur</Button ></NavLink>
					<div className="AddQuiz">
						<Container className="pb-2">
							<Form className="mt-5" onSubmit={this.submitForm}>
								<div className="AddForm mb-4">
									<Row form>
										<Col md={6} >
											<FormGroup>
												<Label for="">Nom du quiz</Label>
												<Input type="text" name="name-quiz" id="name-quiz" onChange={this.onChange} value={this.state['name-quiz']} placeholder="New quiz" />
											</FormGroup>
										</Col>
										<Col md={6}>
											<FormGroup>
												<Label for="exampleSelect">Difficulté</Label>
												<Input type="select" name="difficulty-quiz" id="difficultySelect" onChange={this.onChange} value={this.state['difficulty-quiz']}>
													<option>Débutant</option>
													<option>Amateur</option>
													<option>Confirmé</option>
													<option>Expert</option>
													<option>Maître</option>
												</Input>
											</FormGroup>
										</Col>
									</Row>
									<FormGroup>
										<Label >Question 1</Label>
										<Input type="text" name="question" id="question" onChange={this.onChange} value={this.state.question} placeholder="How old is the universe ?" />
										<Row form>
											<Col md={3}>
												<FormGroup>
													<Label >Réponse 1</Label>
													<Input type="text" name="answer-1" id="answer" onChange={this.onChange} value={this.state['answer-1']} />
													<FormGroup check>
														<Label check>
															<Input type="radio"
																name="status"
																id="status-1"
                                                                onClick={this.onChange}
                                                                value={this.state['status-1']}
                                                                checked={this.state['status-1']}
															/>{' '}Bonne reponse
                                                        </Label>
													</FormGroup>
												</FormGroup>
											</Col>
											<Col md={3}>
												<FormGroup>
													<Label >Réponse 2</Label>
													<Input type="text" name="answer-2" id="answer" onChange={this.onChange} value={this.state['answer-2']} />
													<FormGroup check>
														<Label check>
															<Input type="radio"
																name="status"
																id="status-2"
                                                                onClick={this.onChange}
                                                                value={this.state['status-2']}
                                                                checked={this.state['status-2']}
															/>{' '}Bonne reponse
                                                        </Label>
													</FormGroup>
												</FormGroup>
											</Col>
											<Col md={3}>
												<FormGroup>
													<Label >Réponse 3</Label>
													<Input type="text" name="answer-3" id="answer" onChange={this.onChange} value={this.state['answer-3']} />
													<FormGroup check>
														<Label check>
															<Input type="radio"
																name="status"
																id="status-3"
                                                                onClick={this.onChange}
                                                                value={this.state['status-3']}
                                                                checked={this.state['status-3']}
															/>{' '}Bonne reponse
                                                        </Label>
													</FormGroup>
												</FormGroup>
											</Col>
											<Col md={3}>
												<FormGroup>
													<Label >Réponse 4</Label>
													<Input type="text" name="answer-4" id="answer" onChange={this.onChange} value={this.state['answer-4']} />
													<FormGroup check>
														<Label check>
															<Input type="radio"
																name="status"
																id="status-4"
                                                                onClick={this.onChange}
                                                                value={this.state['status-4']}
                                                                checked={this.state['status-4']}
															/>{' '}Bonne reponse

                            </Label>
													</FormGroup>
												</FormGroup>
											</Col>
										</Row>
									</FormGroup>
									<Button type="submit" >Valider</Button>
								</div>
								<ValidationModal
									modal={this.state.modal}
									toggle={this.toggle}
									answer={this.state.answer}
								/>
							</Form>
						</Container>
					</div>
                    <Table className="mb-0">
                        <thead>
                            <tr className="row m-0">
                                <th className="col-1">#</th>
                                <th className="col-1">Nom du quiz</th>
                                <th className="col-8">Question</th>
                                <th className="col-2"></th>
                            </tr>
                        </thead>
                    </Table>
					<div className="scrollTab">                        
						<Table className="mb-0">
							<tbody>     
								{this.props.quizList.map((quiz, index) => {
									return (
										<tr className="row" key={quiz.id}>
											<th  className="col-1" scope="row">{index + 1}</th>
											<td className="col-1">{quiz['name-quiz']}</td>
											<td className="col-7">{quiz.question}</td>
											<td className="col-3"><Button id={quiz.id} onClick={this.fillForm}>Modifier</Button></td>
										</tr>
									)
                                })}                               
							</tbody>
						</Table>
					</div>
				</Container>
			</div>
		);
	}
}


export default ModifyQuiz;
