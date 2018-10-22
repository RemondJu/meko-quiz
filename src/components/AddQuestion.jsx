import React from 'react';
import { FormGroup, Label, Input, Row, Col } from 'reactstrap';

const AddQuestion = () => {
    return ( 
        <div className="AddQuestion">
             <FormGroup>
                <Label >Question 1</Label>
                <Input type="text" name="text" id="question" placeholder="How old is the universe ?"/>
                <Row form>
                    <Col md={3}>
                        <FormGroup>
                        <Label >Réponse 1</Label>
                        <Input type="text" name="text" id="answer"/>
                        </FormGroup>  
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                        <Label >Réponse 2</Label>
                        <Input type="text" name="text" id="answer"/>
                        </FormGroup>  
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                        <Label >Réponse 3</Label>
                        <Input type="text" name="text" id="answer"/>
                        </FormGroup>  
                    </Col>
                    <Col md={3}>
                        <FormGroup>
                        <Label >Réponse 4</Label>
                        <Input type="text" name="text" id="answer"/>
                        </FormGroup>  
                    </Col>
                </Row>
            </FormGroup>
            
        </div>
     );
}
 
export default AddQuestion;
