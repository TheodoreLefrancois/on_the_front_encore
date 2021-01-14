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

const SignUp = () => {
  const history = useHistory();
  const [signDatas, setSignDatas] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [confPassword, setConfPassword] = useState('');

  const handleSubmit = (e) => {
    if (
      signDatas.firstName &&
      signDatas.lastName &&
      signDatas.email &&
      signDatas.password &&
      confPassword &&
      confPassword === signDatas.password &&
      signDatas.email.includes('@')
    ) {
      e.preventDefault();
      axios
        .post('http://localhost:5000/api/v1/user', signDatas)
        .then(() => {
          history.push('/signin');
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
      // console.log('It works');
      // console.log(signDatas, confPassword);
    } else {
      // console.log('Check inputs datas please!');
    }
  };
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
                  onChange={(e) =>
                    setSignDatas({
                      ...signDatas,
                      firstName: e.target.value,
                    })
                  }
                  placeholder="Jean"
                />
              </FormGroup>
              <FormGroup>
                <Label for="lastname">Lastname</Label>
                <Input
                  type="lastname"
                  name="lastname"
                  id="lastname"
                  onChange={(e) =>
                    setSignDatas({ ...signDatas, lastName: e.target.value })
                  }
                  placeholder="McKay"
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) =>
                    setSignDatas({ ...signDatas, email: e.target.value })
                  }
                  placeholder="jean.mckay@gmail.com"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) =>
                    setSignDatas({ ...signDatas, password: e.target.value })
                  }
                  placeholder="xxx"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Confirm Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => setConfPassword(e.target.value)}
                  placeholder="xxx"
                />
              </FormGroup>
              <Button onClick={handleSubmit}>Submit</Button>
            </Form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
