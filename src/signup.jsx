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

const CreateAccount = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron className="mt-5">
            <h1 className="display-8">Create Your Account</h1>
            <Form>
              <FormGroup>
                <Label for="firstname">Firstname</Label>
                <Input
                  type="firstname"
                  name="firstname"
                  id="firstname"
                  placeholder="Jean"
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastname">Lastname</Label>
                <Input
                  type="lastname"
                  name="lastname"
                  id="lastname"
                  placeholder="McKay"
                />
              </FormGroup>
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

export default CreateAccount;
