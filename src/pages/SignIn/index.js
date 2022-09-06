import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logo from '../../assets/divino.png';

import { Input, Button } from '../../shared/components';

import { Container, Content, Background } from './styles';

export const SignIn = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Divino Tacho" />

        <form>
          <h1>Faça seu logon</h1>

          <Input
            name="email"
            icon={FiMail}
            type="email"
            placeholder="Digite seu email"
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Digite sua senha"
          />

          <Button type="button">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="sign-up">
          <FiLogIn />
          Crie sua conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};
