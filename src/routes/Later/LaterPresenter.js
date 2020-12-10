import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import Section from "../../components/Section";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import Poster from "../../components/Poster";

// import checkBox from "./CheckComponent";

const Container = styled.div`
  padding: 20px;
`;

const LaterPresenter = ({
  nowPlaying,
  upcoming,
  popular,
  error,
  loading,
  // checking,
}) => {
  return (
    <>
      <Helmet>
        <title>개봉 예정작 | Chaingflix</title>
      </Helmet>

      {loading ? (
        <Loader />
      ) : (
        <Container>
          {upcoming && upcoming.length > 0 && (
            <Section title="">
              {upcoming.map((movie) => (
                <>
                  <Poster
                    key={movie.id}
                    id={movie.id}
                    title={movie.original_title}
                    imageUrl={movie.poster_path}
                    rating={movie.vote_average}
                    isMovie={true}
                    year={
                      movie.release_date && movie.release_date.substring(0, 4)
                    }
                  />
                  {/* <input type="checkbox" /> */}
                </>
              ))}
            </Section>
          )}

          {error && <Message color={"#e74c3c"} text={error} />}
        </Container>
      )}
      {/* <button onClick={checkBox}>❤</button> */}
    </>
  );
};

export default LaterPresenter;
