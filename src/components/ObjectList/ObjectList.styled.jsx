//import { NavLink } from "react-router-dom";
//import styled from "styled-components";
import styled from '@emotion/styled';
import { mediaTablet, mediaDesktop } from '../../functions/media';

export const ObjContainer = styled.ul`
    ${mediaTablet(`max-width: 768px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin-left: -30px;
    margin-top: -30px;
  `)} 

    ${mediaDesktop(`max-width: 1280px;
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
    margin-top: -30px;


  `)}
`