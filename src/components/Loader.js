import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100v2;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

const Loader = () => (
  <Container>
    <img
      src="https://t1.daumcdn.net/cfile/tistory/184F8A4E4E55932B06"
      width="40"
      height="40"
    />
  </Container>
);

export default Loader;
