import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Blog" path="/" />
        <NavLink title="Sobre" path="/sobre" includes />
        <NavLink title="Descrição" path="/descricao" includes />
      </ul>
    </Container>
  );
}

export default Header;
