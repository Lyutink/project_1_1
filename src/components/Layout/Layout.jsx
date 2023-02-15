import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "components/GlobalStyle";
import { Toaster } from 'react-hot-toast';
import { NavLinkStyled, LayoutHeader, Container } from "./Layout.styled";

const Layout = () => (
    <>
    <LayoutHeader>   
        <nav>
            <GlobalStyle /> 
            <NavLinkStyled to="/">LOGO</NavLinkStyled>   
            <NavLinkStyled to="/">HELP</NavLinkStyled>
            <NavLinkStyled to="/movies">ASK FOR HELP HERE </NavLinkStyled>
        </nav>
    </LayoutHeader>    
        <Container>  
            <Suspense fallback="">   
                <Outlet /> 
            </Suspense>     
            <Toaster/>
    </Container>         
    </>    
);

export default Layout;