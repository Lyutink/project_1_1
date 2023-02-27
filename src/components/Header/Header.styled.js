import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import blue_sky from '../../assets/images/bg-pictures/blue-sky.png';

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-size: 40px;
  font-weight: 700;
  color: #2a363b;

  &:hover,
  &:focus {
    text-shadow: 0 0 10px rgb(63, 131, 209);
  }
`;

export const HeaderStyled = styled.header`
  /* position: fixed;
  top: 0; */
  z-index: 100;
  width: 100%;
  height: 150px;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #2a363b;
  background-image: url(${blue_sky});
  //background-size: auto;
  background-size: contain;
  background-repeat: no-repeat;
`;
/////// для заставки хедера
//   max-width: 100%;
//   background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
//     url('../././images/main-mobile.jpg');
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   height: 230px;
//   margin: 0 auto;
// box - shadow: var(--box - shadow);

/////////////////////////
