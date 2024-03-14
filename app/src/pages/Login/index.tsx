import { Button, Container, Input, InputGroup, Label, LoginForm } from "./styles";

const Login = () => {
  return (
    <Container>
      <LoginForm>
      <h2>Entre na sua conta</h2>
        <InputGroup>
          <Label htmlFor="username">Email: dsgdg</Label>
          <Input type="text" id="username" name="username" required />
        </InputGroup>
        <InputGroup>
        <Label htmlFor="password">Senha: fdsf</Label>
          <Input type="password" id="password" name="password" required />
        </InputGroup>
          <Button type="submit">Login  fds</Button>
      </LoginForm>
    </Container>
   );
}

export default Login;
