import React, { useState } from 'react';

import MaterialIcon from 'material-icons-react';
import {
  Input,
  Nav,
  NavHeader,
  NavSearchBar,
  NavSidebar,
  ThemeNav,
  UserNav,
  StyledMenu,
  NavLeft,
  NavRight,
} from './NavBar.styles';
import Switch from './StyledSwitch/StyledSwitch.component';

function NavBar() {
  const [isToggled, setIsToggled] = useState('dark');
  const changeTheme = () => {
    setIsToggled(!isToggled);
  };

  const onChange = (e) => {
    console.log('🚀 ~ file: Navbar.jsx ~ line 48 ~ onChange ~ e', e);
  };

  const onSearch = (e) => {
    if (e.key === 'Enter') {
      console.log("🚀 ~ file: Navbar.jsx ~ line 52 ~ onSearch ~ 'Enter'", 'Enter');
    }
  };

  return (
    <>
      <Nav>
        <NavHeader>
          <NavLeft>
            <NavSidebar>
              <StyledMenu>
                <span />
                <span />
                <span />
              </StyledMenu>
            </NavSidebar>
            <NavSearchBar>
              <Input
                type="text"
                placeholder="Search"
                onKeyDown={onSearch}
                onChange={onChange}
              />
            </NavSearchBar>
          </NavLeft>

          <NavRight>
            <ThemeNav>
              <Switch
                id="test-switch"
                toggled={isToggled}
                onChange={() => changeTheme()}
              />
            </ThemeNav>
            <UserNav>
              <MaterialIcon icon="account_circle" color="white" />
            </UserNav>
          </NavRight>
        </NavHeader>
      </Nav>
    </>
  );
}

export default NavBar;
