import { Suspense } from "react";
import { Outlet } from "react-router-dom";
//import { GlobalStyle } from "components/GlobalStyle";
import { Toaster } from 'react-hot-toast';
import { Header } from '../components/Header'
import { Container } from "components/Container";
//import { NavLinkStyled, LayoutHeader, Container } from "./Layout.styled";
import { Main } from "./Layout.styled";

const Layout = () => (
    <>
        <Header/>
    {/* <LayoutHeader>   
        <nav>
            <GlobalStyle /> 
            <NavLinkStyled to="/">LOGO</NavLinkStyled>   
            <NavLinkStyled to="/">HELP</NavLinkStyled>
            <NavLinkStyled to="/movies">ASK FOR HELP HERE </NavLinkStyled>
        </nav>
    </LayoutHeader>     */}
        <Main>
          <Container>  
            <Suspense fallback="">   
                <Outlet /> 
            </Suspense>     
            <Toaster/>
            </Container>    
        </Main>        
    </>    
);

export default Layout;