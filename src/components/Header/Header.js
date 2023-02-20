import { GlobalStyle } from 'components/GlobalStyle';
import { NavLinkStyled, HeaderStyled } from './Header.styled';
import { Container } from 'components/Container';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <nav>
          <GlobalStyle />
          <NavLinkStyled to="/">LOGO</NavLinkStyled>
          <NavLinkStyled to="/">HELP</NavLinkStyled>
          <NavLinkStyled to="/movies">ASK FOR HELP HERE </NavLinkStyled>
        </nav>
      </Container>
    </HeaderStyled>
  );
};
