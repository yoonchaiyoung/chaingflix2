import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: inline-block;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(38, 43, 40);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 100%;
  text-align: center;
  justify-content: center;
  text-align: center;
  display: inline-block;
  height: 50px;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#f5f4a9" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const StyledLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <StyledLink to="/">홈페이지</StyledLink>
      </Item>
      <Item current={pathname === "/now"}>
        <StyledLink to="/now">현재 상영작</StyledLink>
      </Item>
      <Item current={pathname === "/later"}>
        <StyledLink to="/later">개봉 예정작</StyledLink>
      </Item>
      <Item current={pathname === "/popular"}>
        <StyledLink to="/popular">인기 상영작</StyledLink>
      </Item>
    </List>
  </Header>
));
