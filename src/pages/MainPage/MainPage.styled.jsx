import styled from '@emotion/styled';
//import styled from 'styled-components';

import { mediaTablet, mediaDesktop } from '../../functions/media';

import poly_baner from '../../assets/images/bg-pictures/poly_banner.png'


export const MainBox = styled.div`
    width: <a href=""></a>;
  ${mediaTablet(`
  min-height: 100vh;
  min-width: 768px;

    background-image: url(${poly_baner})

    background-repeat: no-repeat;
  `)}

  ${mediaDesktop(`
  min-width: 1280px;

 background-image: url(${poly_baner});

    background-repeat: repeat;
  `)}
`;   
