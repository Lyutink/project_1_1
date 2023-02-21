import { NavLink } from "react-router-dom";
//import styled from "styled-components";
import styled from '@emotion/styled';
import { mediaTablet, mediaDesktop } from '../../functions/media';

export const ObjContainer = styled.div`
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
    
export const ObjItem = styled.li`
    :not(:last-child) {
  margin-bottom: 20px;} */

    ${mediaTablet(`max-width: 768px;
      margin-bottom: 0px;
    margin-top: 30px;
    margin-left: 30px;
    flex-basis: calc((100% - 60px) / 2);
    position: relative;
    margin-bottom: 0px;

    &:not(:last-child) {
      margin-bottom: 0px;
    }
  
  `)}

    ${mediaDesktop(`max-width: 1280px;
      margin-top: 30px;
    margin-left: 30px;
    flex-basis: calc((100% - 90px) / 3);
    position: relative;
  `)}
`;    
/////////////////////////////////

///////////////////////////////////
export const ObjCard = styled.div`
    font-size: 24px;
    font-weight: 500px;
    :hover, :focus{
        text-shadow: 0 0 10px rgb(63, 131, 209);
    }
`
export const ObjLink = styled(NavLink)`
    text-decoration: none;
    &.active{
    color: #1e0ff0;}
`
export const ObjImg = styled.img`
    display: block;
    max-width: 100%;
    height: auto;
`
export const ObjCardWrapper = styled.div`
  padding: 10px;
`
export const ObjCardTitle =styled.h2`
      color: #000000;
    font-size: 50px;
    font-weight: 500px;
`