/* eslint-disable react/no-unescaped-entities */
import {
  Button,
  Jumbotron,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const SignIn = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron className="mt-5">
            <h1 className="display-8">Sign In</h1>
            <Form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="jean.mckay@gmail.com"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="xxx"
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
