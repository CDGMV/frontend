import Burger from './burger';
import { Nav, Logo, Image } from './styles';
import logoName from '../../assets/navbar/logo.png';

export default function Navbar({ open, setOpen }) {
  return (
    <Nav>
      <Logo>
        <Image
          src={logoName}
          alt="Logo"
        />
      </Logo>
      <Burger open={open} setOpen={setOpen} />
    </Nav>
  );
}
