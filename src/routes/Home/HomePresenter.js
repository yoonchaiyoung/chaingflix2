import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Poster from "../../components/Poster";

const Container = styled.span`
  font-size: 80px;
  /* font-family: serif; */
  font-style: italic;
  font-weight: bold;
  color: #f5f4a9;
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 200px;
  /* align-items: start; */
  justify-content: center;
  /* text-shadow: 0 0 1px #2b259c, 0 0 20px #2b259c, 0 0 30px #fff, 0 0 40px #fff,
    0 0 70px #fff, 0 0 80px #fff, 0 0 100px #fff, 0 0 150px #fff; */
  text-shadow: 3px 3px 4px #f20540;
`;

const HomePresenter = (
  nowPlaying,
  upcoming,
  popular,
  error,
  loading
  // checking,
) => {
  return (
    <>
      <Helmet>
        <title>홈페이지 | Chaingflix</title>
      </Helmet>

      {loading ? (
        <Loader />
      ) : (
        <Container>
          <div>
            <span>Welcome to Chaingflix II</span>
          </div>
        </Container>
      )}
    </>
  );
};

export default HomePresenter;
