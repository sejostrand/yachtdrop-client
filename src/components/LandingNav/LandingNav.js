import React, { useState } from 'react';
import styled from 'styled-components';

// IMPORT COMPONENTS
/* import NavLogo from './objects/NavLogo'; */
import NavAdmin from './objects/NavAdmin';
import LoginLink from './objects/LoginLink';
import ProfileLink from './objects/ProfileLink';
import SignUpLink from './objects/SignUpLink';
import YachtdropLogo from '@objects/YachtdropLogo';
import LogOutButton from '@objects/LogOutButton';

//import colors

const StyledNavBar = styled.nav`
  background: linear-gradient(white, none);
  padding: 5px 25px;
  width: 100%;
  justify-content: space-between;
  top: 0;
  display: flex;
  position: -webkit-sticky;
  position: absolute;
  z-index: 10;
  overflow: hidden;
  transition: ease-in-out 0.2s;
`;

const LandingNav = (props) => {
  return (
    <StyledNavBar>
      <YachtdropLogo />
      <NavAdmin>
        <LoginLink />
        <ProfileLink />
        <SignUpLink />
        <LogOutButton />
      </NavAdmin>
    </StyledNavBar>
  );
};

export default LandingNav;
