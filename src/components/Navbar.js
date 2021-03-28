import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logofood.png';
import styled from 'styled-components';

import { ButtonContainer } from './Button';

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                { /*reserved for dropdown 
               <li className="nav-item ml-5">
                        
                    </li>
               */}
                {/*  
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk  */}
                <Link to='/'>
                    <img src={logo} alt="foodlist" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link text-dark">
                            Beta Foods
                        </Link>
                    </li>
                </ul>
                {/*
                <ButtonContainer>
                    <span className="mr-2">
                        <i className="fas fa-search" />
                    </span>
                        Search
                    </ButtonContainer>



                <Link to="/" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-user" />
                        </span>
                        User
                    </ButtonContainer>
                </Link>  */
                }
                <Link to="/tray" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-shopping-basket" />
                        </span>
                        my tray
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background: var(--mainOrange);
color: var(--mainWhite) !important;
font-size: 2rem;
text-transform: capitalize;
`

export default Navbar;