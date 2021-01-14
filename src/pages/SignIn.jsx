/* eslint-disable react/no-unescaped-entities */
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    const datas = {
      email,
      password,
    };
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/v1/auth', datas)
      .then((response) => {
        localStorage.setItem('token', response.data.token);

        axios.interceptors.request.use(
          (config) => {
            const { origin } = new URL(config.url);
            const allowedOrigins = ['http://localhost:5000'];
            const token = localStorage.getItem('token');
            if (allowedOrigins.includes(origin)) {
              // eslint-disable-next-line no-param-reassign
              config.headers.authorization = `Bearer ${token}`;
              // eslint-disable-next-line no-param-reassign
              config.headers.userId = response.user.id;
            }
            return config;
          },
          (error) => {
            return Promise.reject(error);
          }
        );
        history.push('/map');
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };
  return (
    <Container>
      <Row>
        <Col>
          <Jumbotron className="mt-5">
            <h1 className="display-8">Sign In</h1>
            <Form method="post" onSubmit={(e) => handleSubmit(e)}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="jean.mckay@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="xxx"
                  onChange={(e) => setPassword(e.target.value)}
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
