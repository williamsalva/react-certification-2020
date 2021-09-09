import styled from 'styled-components';

export const Nav = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background: ${({ theme }) => theme.navbar};
  background: #1f1f1f;

  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  overflow: hidden;
  z-index: 100;
`;

export const NavHeader = styled.div`
  padding: 10px 20px;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
`;

export const NavLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: start;
`;
export const NavRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: end;
`;

export const NavSidebar = styled.div`
  width: 10vw;
  text-align: left;
`;

export const NavSearchBar = styled.div`
  width: 30vw;
  padding-right: 1vh;
  text-align: left;
`;

export const Input = styled.input`
  width: 80%;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: black;
  padding: 7px 33px;
  color: #999;
  cursor: text;
  font-weight: 600;
  text-align: left;
  background: #fafafa;
  &:active,
  &:focus {
    border: solid 1px #dbdbdb;
    outline: none;
  }
`;

export const UserNav = styled.div`
  width: 10vw;
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ThemeNav = styled.div`
  width: 33.333%;
  text-align: right;
  display: table-cell;
  vertical-align: middle;
  margin-top: 5px;
`;
export const StyledMenu = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1;

  span {
    margin-top: 0.3rem;
    width: 1.2rem;
    height: 0.2rem;
    background: ${({ theme }) => theme.text};
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
  }
`;
export const Image = styled.img`
  width: 38px;
  height: 38px;
`;
