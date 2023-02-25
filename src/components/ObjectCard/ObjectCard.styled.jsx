import { NavLink } from "react-router-dom";
//import styled from "styled-components";
import styled from '@emotion/styled';
import { mediaTablet, mediaDesktop } from '../../functions/media';


    
export const ObjItem = styled.li`
    :not(:last-child) {
  margin-bottom: 20px;} 

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

    ${mediaDesktop(`
      margin-top: 30px;
    margin-left: 30px;
    flex-basis: calc((100% - 90px) / 3);
    position: relative;


  `)}
`;    
/////////////////////////////////

///////////////////////////////////
export const ObjInfo = styled.div`
  border-radius: 5px;
  transition: transform var(--animation-duration) var(--timing-function);
    font-size: 24px;
    font-weight: 500px;
    :hover, :focus{
      transform: scale(1.05);
      box-shadow: 0 0 20px rgba(255, 107, 8, 1);
    }
`
export const ObjLink = styled(NavLink)`
    display: block;
    text-decoration: none;
    &.active{
    color: #1e0ff0;}
`
export const ObjImg = styled.img`
  height: 398px;
  width: 280px;
  cursor: pointer;
  border-radius: 5px;
  filter: drop-shadow(1px 1px 1px rgba(55%, 55%, 55%, 0.6));
  box-shadow: 0 0 10px rgba(55%, 55%, 55%, 0.5);
`
export const ObjCardWrapper = styled.div`
  padding: 10px;
`
export const ObjCardTitle =styled.h2`
      color: #000000;
    font-size: 50px;
    font-weight: 500px;
`