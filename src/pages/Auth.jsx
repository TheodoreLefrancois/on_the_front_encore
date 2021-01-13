import axios from 'axios';
import { useState } from 'react';
import { Button, FormGroup, Input, Label, Form } from 'reactstrap';

const Auth = () => {
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
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  };
  return (
    <Form method="post" onSubmit={(e) => handleSubmit(e)}>
      <FormGroup>
        <Label htmlFor="email">Email : </Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password : </Label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      <Button type="submit">Se connecter</Button>
    </Form>
  );
};

export default Auth;
