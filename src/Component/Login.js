import React from 'react';
import { Button, Form, Container, FormGroup, FormFeedback, Label, Input, FormText } from 'reactstrap';

class Login extends React.Component {
  render() {
    return (
      <Container id='form'>
        <Form>
          <FormGroup>
            <Label for="id_email">Email</Label>
            <Input type="email" name="email" id="id_email" placeholder="Enter email" valid />
            <FormText></FormText>
          </FormGroup>
          <FormGroup>
            <Label for="password_id">Password</Label>
            <Input type="password" name="password" id="password_id" placeholder="Enter password" valid/>
            <FormText>It should be strong.</FormText>
          </FormGroup>
          <Button>Start shopping!</Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
